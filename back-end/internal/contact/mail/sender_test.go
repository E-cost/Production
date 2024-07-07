package mail

import (
	"Ecost/internal/config"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestSendMailWithGmail(t *testing.T) {
	sender := NewYandexSender(config.EmailConfig{
		Protocol: "smtp",
		Port:     587,
		Address:  "yandex.ru",
		Domain:   "e-cost.by",
		Sender:   "kamchatka.business@yandex.ru",
		Password: "ixcxnutazpskptbf",
	})

	subject := "Testing."
	content := `
		<h1>Success.</h1>
	`
	to := []string{"hmurauyou.test@gmail.com"}

	err := sender.SendMail(subject, content, to, nil, nil, nil)
	require.NoError(t, err)
}
