import { IFilterOrder } from '../../../../../interfaces'

export const convertMoney = (data: IFilterOrder, status: string): number => {
  const totalMoney = data.orders
    .filter((item) => item.status === status)
    .reduce((total, item) => {
      return total + item.orderTotal
    }, 0)
  return totalMoney
}
