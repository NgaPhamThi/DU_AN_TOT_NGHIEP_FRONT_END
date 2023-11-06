import { IProduct } from "../interfaces/product"
import instance from "./instance"

export const getAllProduct = () => {
    return instance.get('/products')
}
export const getById = (id: string) => {
    const uri = "/products/" + id
    return instance.get(uri)
}
export const addProduct =(product:IProduct)=>{
    const uri = "/products";
    return instance.post(uri, product)
}
export const updateProduct =(product:IProduct, id:string)=>{
    const uri = "/products/"+ id;
    return instance.patch(uri,product)
}
export const deleteProduct =(product:string | number)=>{
    const uri = "/products/" +product
    return instance.delete(uri)
} 
