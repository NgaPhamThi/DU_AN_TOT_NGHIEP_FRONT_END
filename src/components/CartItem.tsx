import React from 'react'
import { useShoppingContext } from '../context/ShoppingCartContext'
type cartItemProps = {
    _id: number | string
    name: string
    price: number
    quantity: number,
    img: string,
    sizeId:string,
    colorId: string
}

const CartItem = ({ _id, name, price,sizeId,colorId, quantity, img }: cartItemProps) => {
    const { increaseQty, decreaseQty, removeCartItem } = useShoppingContext()
    if(colorId === '6567184222b9ae3620657026'){
        var color = 'grey'
    }
    if(colorId === '6567186022b9ae362065702e'){
       var color = "white"
    }
    if(colorId === '6567187222b9ae3620657030'){
        var color ="blue"
    }
    if(sizeId === '656717da22b9ae362065700a'){
        var size = 'M'
    }
    if(sizeId === '656717e222b9ae362065700c'){
       var size = "L"
    }
    if(sizeId === '656717e722b9ae362065700e'){
        var size ="XL"
    }
    return (
        <div className="border-t-2 p-4 bg-white shadow-md rounded-md mb-4">
      <table className="table-auto w-full">
          <thead className="pb-10 ">
                <tr className="text-left ">
                    <th className=" font-semibold pb-10">Sản phẩm</th>
                    <th className="font-semibold pb-10">Size</th>
                    <th className="font-semibold pb-10">Màu</th>
                    <th className="font-semibold pb-10">Giá tiền</th>
                    <th className="font-semibold pb-10">Tổng tiền</th>
                </tr>
            </thead>

        <tbody>
          <tr key={_id} className="border-t-2">
            
            <td className="flex items-center py-4 gap-4">
              <img className="w-16 h-16 object-cover rounded" src={img} alt="" />
              <div>
                <p className="text-gray-800 font-semibold">{name}</p>
              </div>
            </td>
            <td className="w-20 flex items-center space-x-2">
              <button
                onClick={() => decreaseQty(_id as string, sizeId, colorId)}
                className="text-red-500 bg-gray-200 px-3 py-1 rounded"
              >
                -
              </button>
              <span className="font-bold">{quantity}</span>
              <button
                onClick={() => increaseQty(_id as string, sizeId, colorId)}
                className="text-green-500 bg-gray-200 px-3 py-1 rounded"
              >
                +
              </button>
            </td>
            <td className="w-20 text-center font-semibold">{size}</td>
            <td className="w-20 text-center font-semibold">{color}</td>
            <td className="w-20 font-semibold">${price}</td>
            <td className="w-20 font-semibold">${quantity * price}</td>
            <td>
            <button onClick={() => removeCartItem(_id as string ,sizeId, colorId)}>
                                <i className="fa-sharp fa-solid fa-circle-xmark text-slate-300 bg-black rounded-full shadow-md shadow-black text-3xl"></i>
                            </button>
                        </td>
          </tr>
        </tbody>
      </table>
    </div>
    )
    
}

export default CartItem