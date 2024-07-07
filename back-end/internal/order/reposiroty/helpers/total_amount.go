package helpers

import "Ecost/internal/order/model"

func CalculateTotalAmount(items []model.Item) float64 {
	amount := 0.0
	taxAmount := 0.0

	for _, item := range items {
		amount += float64(item.Quantity) * float64(item.PriceBYN)
		taxAmount += amount * 0.2 + amount
	}

	return taxAmount
}
