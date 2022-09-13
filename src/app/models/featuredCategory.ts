export interface IFeaturedCategory {
    "data": {
        "categoryName": string,
        "products":
        {
            "fullDescription": string,
            "addToCart": {
                "id": number,
                "quantity": number,
                "isMonthly": boolean,
                "cartId": number
            },
            "id": number,
            "name": string,
            "shortDescription": string,
            "oldPrice": null,
            "price": string,
            "priceValue": number,
            "imageUrl": string,
            "hasDiscount": boolean,
            "discountPercentage": number,
            "isMonthlySubscription": boolean,
            "currency": string
        }[]
    },
    "message": string,
    "errorList": []
}