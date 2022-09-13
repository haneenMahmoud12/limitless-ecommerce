import { IProduct } from "./product";

export interface IHomeOffers {
    "data": IProduct[],
    "message": string,
    "errorList": []
}