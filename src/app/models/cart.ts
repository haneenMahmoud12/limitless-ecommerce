export interface ICart {
    "data": {
        "products":
        {
            "id": number,
            "name": string,
            "shortDescription": string,
            "imageUrl": string,
            "quantity": number,
            "oldPrice": null,
            "currentPrice": number,
            "isMonthly": boolean,
            "unitPrice": string,
            "subTotalPrice": string,
            "shoppingCartItemId": number,
            "isMonthlySubscription": null,
            "currency": string
        }[]
        ,
        "oneTimeSubTotal": string,
        "monthlySubTotal": string,
        "discountAmount": string,
        "discountCoupon": null,
        "totalPrice": string
    },
    "message": string,
    "errorList": []
}