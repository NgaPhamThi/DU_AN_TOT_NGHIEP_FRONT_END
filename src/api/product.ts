import instance from "./instance"

export const getProduct = () => {
    return instance.get('/products')
}
export const getById = (id: string) => {
    const uri = "/products/" + id
    return instance.get(uri)
}