export interface ITOResponse {
    "data": {
        "id": number,
        "orderNumber": number,
        "totalPrice": string,
        "orderStatus": string,
        "orderStatusInt": number,
        "date": string,
        "currency": string
    }[],
    "message": string,
    "errorList": []
}