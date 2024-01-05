export interface IVouchers {
    _id?: string,
    Voucher_Code?: string,
    Discount_Type?: string,
    quantity?: number,
    Start_Date?:Date,
    Expiration_Date?: Date,
    IsActive?: boolean
    Description?: string
}