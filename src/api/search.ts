import instance from "./instance"

export const searchProduct = (data:any) => {
    return instance.get('/search',{params:{name:data}})
}
