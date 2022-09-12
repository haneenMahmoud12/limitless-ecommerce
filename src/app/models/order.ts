export interface IOrder {
    "data": {
        "orderNumber": number,
        "orderTotal": number,
        "products": {
            "id": number,
            "name": string,
            "unitPrice": string,
            "imageUrl": string,
            "quantity": number,
            "isMonthly": boolean,
            "currency": string
        }[]
    },
    "message": string,
    "errorList": []
}