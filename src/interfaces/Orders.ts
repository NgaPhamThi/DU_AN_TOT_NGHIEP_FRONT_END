import { IOrderDetail } from "./orderDetail";

export interface IOrders {
  _id?: string | number;
  userId: string;
  fullname: string;
  email:string
  status:string
  phonenumber: string;
  address: string;
  orderTotal: number;
  orderDetails: IOrderDetail[];
}