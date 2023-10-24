
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProduct } from '../../api/product';
import { IProduct } from '../../interfaces/product';



const CommentManagement = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    console.log(products);
    useEffect(() => {
        async function fetchProduct() {
            const {data} = await getProduct();
            setProducts(data);
            console.log(data);
            
        }
        fetchProduct()
    }, [])
  return (
    <body className="bg-gray-100 mx-auto w-full">
        
    <div className="container   p-4 bg-white rounded shadow-xl">
    <div className="text-center pb-7 ">
        <h1 className="text-2xl font-semibold">Quản Lý Bình Luận</h1>
       
    </div>

    {/* <div className="mt-4">
        <input type="text" placeholder="Tìm kiếm bình luận..." className="w-full p-2 border rounded"/>

        <div className="flex mt-2 space-x-4">
            <select className="p-2 border rounded">
                <option>Chọn sản phẩm</option>
           
                <option>Sản phẩm A</option>
                <option>Sản phẩm B</option>
            </select>
            <select className="p-2 border rounded">
                <option>Tất cả trạng thái</option>
                <option>Đã duyệt</option>
                <option>Chưa duyệt</option>
                <option>Đã ẩn</option>
            </select>

            <input type="date" className="p-2 border rounded"/>
            <span>đến</span>
            <input type="date" className="p-2 border rounded"/>
        </div>
    </div> */}

    <table className="mt-4 w-full border-collapse">
        <thead>
            <tr className="bg-gray-300">
                <th className="border p-2">ID</th>
                <th className="border p-2">Tên sản phẩm</th>
                <th className="border p-2">Ảnh</th>
                <th className="border p-2">giá </th>
                <th className="border p-2">Giá Sale</th>
                <th className="border p-2">Trạng thái</th>
            </tr>
        </thead>
        <tbody>
        
           {products.map((product,index)=>(
             <tr className='' key={product._id}>
             <td className="border p-2 text-center">{index+1}</td>
             <td className="border text-center">{product.name}</td>
             <td className="border   text-center"><img className='h-80 mx-auto ' src={product.img} alt="" /></td>
             <td className="border  text-center">{product.price}</td>
             <td className="border  text-center">{product.price_sale}</td>
             <td className="border text-center  ">
                 <Link className='' to={`comment/${product._id}`}><button className="bg-red-500 text-white pl-3 pr-3   py-1 rounded">Xem chi tiết bình luận</button></Link>
             </td>
         </tr>
           ))}
            
        </tbody>
    </table>

    <div className="mt-4 flex justify-center">
       
        <button className="bg-blue-500 text-white px-4 py-2 rounded">1</button>
        <button className="bg-white text-blue-500 px-4 py-2 rounded ml-2">2</button>
        
    </div>
</div>

</body>
  )
}

export default CommentManagement