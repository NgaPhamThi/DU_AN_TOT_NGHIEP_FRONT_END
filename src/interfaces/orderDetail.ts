export interface IOrderDetail {
    _id?: string;
    orderId?: string;
    productId: string | number;
    quantity: number;
    price: number;
    sizeId: string | null;
    colorId: string;
  }