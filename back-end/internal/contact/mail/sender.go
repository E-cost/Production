package mail

import (
	"Ecost/internal/config"
	"fmt"
	"net/smtp"

	"github.com/jordan-wright/email"
)

type YandexSender struct {
	protocol string
	port     int
	address  string
	domain   string
	sender   string
	password string
}

func NewYandexSender(cfg config.EmailConfig) *YandexSender {
	return &YandexSender{
		protocol: cfg.Protocol,
		port:     cfg.Port,
		address:  cfg.Address,
		domain:   cfg.Domain,
		sender:   cfg.Sender,
		password: cfg.Password,
	}
}

func (s *YandexSender) SendMail(
	subject string,
	content string,
	to []string,
	cc []string,
	bcc []string,
	attachFiles []string,
) error {
	e := email.NewEmail()
	e.From = fmt.Sprintf("%s <%s>", s.domain, s.sender)
	e.Subject = subject
	e.HTML = []byte(content)
	e.To = to
	e.Cc = cc
	e.Bcc = bcc

	smtpAddr := fmt.Sprintf("%s.%s:%d", s.protocol, s.address, s.port)
	smtpServer := fmt.Sprintf("%s.%s", s.protocol, s.address)

	smtpAuth := smtp.PlainAuth("", s.sender, s.password, smtpServer)

	return e.Send(smtpAddr, smtpAuth)
}
