import instance from "./instance"

export const getComment =(productId:string)=>{
    const uri = "/comment/" +productId
    return instance.get(uri)
}
export const deleteComment =(commentId:string)=>{
    const uri = "/comment/" +commentId
    return instance.delete(uri)
}