export interface IProductDetails {
    "data": {
        "pictureModels":
        {
            "imageUrl": string,
            "thumbImageUrl": string,
            "fullSizeImageUrl": string,
            "title": string,
            "alternateText": string,
            "customProperties": {}
        }[],
        "productTags":
        {
            "id": number,
            "name": string,
            "products":
            {
                "id": number,
                "name": string,
                "imageUrl": string
            }[]
        }[],
        "productManufacturers": [],
        "attributes":
        {
            "name": string,
            "values": [
                {
                    "attributeTypeId": number,
                    "valueRaw": string,
                    "colorSquaresRgb": null,
                    "customProperties": {}
                }
            ],
            "id": number,
            "customProperties": {}
        }[],
        "offerExpiryMessage": string,
        "categoryName": string,
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
        "isMonthlySubscription": null,
        "currency": string
    },
    "message": string,
    "errorList": []
}