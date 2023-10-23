import instance from "./instance"

export const getComment =(productId:string)=>{
    const uri = "/comment/" +productId
    return instance.get(uri)
}