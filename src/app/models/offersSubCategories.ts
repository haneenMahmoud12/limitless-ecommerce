import { IProduct } from "./product"

export interface IOffersSubCategories {
    "data": [
        {
            "id": 45,
            "name": "Buy 1 get 1",
            "products": IProduct[]
        },
        {
            "id": 48,
            "name": "Discount 20%",
            "products": IProduct[]
        },
        {
            "id": 38,
            "name": "Latest Offers",
            "products": IProduct[]
        }
    ],
    "message": string,
    "errorList": []
}