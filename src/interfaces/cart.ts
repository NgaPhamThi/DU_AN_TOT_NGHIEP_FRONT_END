export interface IUser {
    _id?: string | number  ;
    username: string;
    email: string;
    password: string;
    confirmPassword?: string;
    role:string;
    status:string;
    confirmationCode:string;
}