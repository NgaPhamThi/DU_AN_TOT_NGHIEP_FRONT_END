import {ICategories} from "./categories"
export interface IProduct {
    _id?: string | number;
    name: string;
    price: number
    price_sale: number
    img: string
    category : ICategories
    description: string
    
}