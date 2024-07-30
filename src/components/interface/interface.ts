
export interface TProducts {
    _id: string,
    name: string,
    price: string,
    category: string,
    description: string,
    review?: [
        string
    ],
    discount: number,
    stock: number,
    thumnail: string,
    image: [string],
    isDelete: boolean
}