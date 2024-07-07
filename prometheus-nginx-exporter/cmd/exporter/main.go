package exporter

import (
	"bytes"
	"flag"
	"fmt"
	"io"
	"log"
	"net/http"
	prometheus_nginx_exporter "prometheus-nginx-exporter"
	"regexp"
	"strconv"
	"time"

	"github.com/hpcloud/tail"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

type Metrics struct {
	size     prometheus.Counter
	duration *prometheus.HistogramVec
	requests *prometheus.CounterVec
}

var exp = regexp.MustCompile(`^(?P<remote>[^ ]*) (?P<host>[^ ]*) (?P<user>[^ ]*) \[(?P<time>[^\]]*)\] \"(?P<method>\w+)(?:\s+(?P<path>[^\"]*?)(?:\s+\S*)?)?\" (?P<status_code>[^ ]*) (?P<size>[^ ]*)(?:\s"(?P<referer>[^\"]*)") "(?P<agent>[^\"]*)" (?P<urt>[^ ]*)$`)

func initializeNginxStats(uri string) func() ([]prometheus_nginx_exporter.NginxStats, error) {
	basicStats := func() ([]prometheus_nginx_exporter.NginxStats, error) {
		var netClient = &http.Client{
			Timeout: time.Second * 10,
		}

		resp, err := netClient.Get(uri)
		if err != nil {
			log.Fatalf("netClient.Get failed %s, due an error: %s", uri, err)
		}
		defer resp.Body.Close()
		body, err := io.ReadAll(resp.Body)
		if err != nil {
			log.Fatalf("io.ReadAll failed due an error: %s", err)
		}
		r := bytes.NewReader(body)

		return prometheus_nginx_exporter.ScanBasicsStats(r)
	}

	return basicStats
}

func initializePrometheusMetrics(basicStats func() ([]prometheus_nginx_exporter.NginxStats, error)) *prometheus.Registry {
	bc := prometheus_nginx_exporter.NewBasicCollector(basicStats)
	reg := prometheus.NewRegistry()
	reg.MustRegister(bc)

	return reg
}

func listenAndServe(reg *prometheus.Registry, port int) {
	mux := http.NewServeMux()
	promHandler := promhttp.HandlerFor(reg, promhttp.HandlerOpts{})
	mux.Handle("/metrics", promHandler)

	addr := fmt.Sprintf(":%d", port)
	log.Printf("starting nginx exporter on :%d/metrics", port)
	if err := http.ListenAndServe(addr, mux); err != nil {
		log.Fatalf("cannot start nginx exporter: %s", err)
	}
}

func NewMetrics(reg prometheus.Registerer) *Metrics {
	m := &Metrics{
		size: prometheus.NewCounter(prometheus.CounterOpts{
			Namespace: "nginx",
			Name:      "size_bytes_total",
			Help:      "Total bytes sent to the clients.",
		}),
		requests: prometheus.NewCounterVec(prometheus.CounterOpts{
			Namespace: "nginx",
			Name:      "http_requests_total",
			Help:      "Total number of requests.",
		}, []string{"status_code", "method", "path"}),
		duration: prometheus.NewHistogramVec(prometheus.HistogramOpts{
			Namespace: "nginx",
			Name:      "http_request_duration_seconds",
			Help:      "Duration of the request.",
			// Optionally configure time buckets
			// Buckets:   prometheus.LinearBuckets(0.01, 0.05, 20),
			Buckets: prometheus.DefBuckets,
		}, []string{"status_code", "method", "path"}),
	}
	reg.MustRegister(m.size, m.requests, m.duration)
	return m
}

func main() {
	var (
		targetHost = flag.String("target.host", "localhost", "nginx address with basic_status page")
		targetPort = flag.Int("target.port", 8080, "nginx port with basic_status page")
		targetPath = flag.String("target.path", "/status", "URL path to scrap metrics")
		promPort   = flag.Int("prom.port", 9150, "port to expose prometheus metrics on")
		logPath    = flag.String("target.log", "/var/log/nginx/access.log", "path to access.log")
	)
	flag.Parse()
	uri := fmt.Sprintf("http://%s:%d%s", *targetHost, *targetPort, *targetPath)

	log.Println("Initializing Nginx statistics...")
	basicStats := initializeNginxStats(uri)

	log.Println("Initializing metrics...")
	reg := initializePrometheusMetrics(basicStats)

	m := NewMetrics(reg)
	go tailAccessLogFile(m, *logPath)

	listenAndServe(reg, *promPort)
}

func tailAccessLogFile(m *Metrics, path string) {
	t, err := tail.TailFile(path, tail.Config{Follow: true, ReOpen: true})
	if err != nil {
		log.Fatalf("tail.TailFile failed: %s", err)
	}

	for line := range t.Lines {
		match := exp.FindStringSubmatch(line.Text)
		result := make(map[string]string)

		for i, name := range exp.SubexpNames() {
			if i != 0 && name != "" {
				result[name] = match[i]
			}
		}

		s, err := strconv.ParseFloat(result["size"], 64)
		if err != nil {
			continue
		}
		m.size.Add(s)

		m.requests.With(prometheus.Labels{"method": result["method"], "status_code": result["status_code"], "path": result["path"]}).Add(1)

		u, err := strconv.ParseFloat(result["urt"], 64)
		if err != nil {
			continue
		}
		m.duration.With(prometheus.Labels{"method": result["method"], "status_code": result["status_code"], "path": result["path"]}).Observe(u)
	}
}
