import {ICategories} from "./categories"
export interface IProduct {
    _id?: string | number;
    name: string;
    price: number
    img: string[]
    categoryId : string
    description: string
    
}