export interface IAddress {
    "data":
    {
        "id": number,
        "title": string,
        "city": string,
        "area": string,
        "street": string,
        "buildingNumber": number,
        "apartmentNumber": number
    }[],
    "message": string,
    "errorList": []
}