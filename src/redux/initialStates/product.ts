export const productInitialState = {
    products: [],
    search: ''
}

export interface IProduct {
    _id: string,
    id: number,
    brand: string,
    description: string,
    image: string,
    price: number,
    discount: number
}

export interface IProductState {
    products: IProduct[],
    search: string
}

export interface ISetProductState {
    payload: any
}