export interface Comments{
    _id: string;
    content:string;
    userId:string;
    productId:{
        _id:string;
        username:string;
    };
    createdAt:Date
}