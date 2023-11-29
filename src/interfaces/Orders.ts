import { IOrderDetail } from "./orderDetail";

export interface IOrders {
    userId: string;
  fullname: string;
  phonenumber: string;
  address: string;
  orderTotal: number;
  orderDetails: IOrderDetail[];
}