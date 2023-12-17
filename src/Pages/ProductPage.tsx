// import React from 'react'
import { useEffect, useState } from 'react'

import { getProduct } from '../api/product'
import { IProduct } from '../interfaces/product'
import Product from '../components/product'
import FilProduct from "../components/FilProduct";
import SideCatProduct from "../components/SideCatProduct";

const ProductPage = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const fetProducts = async () => {
      const { data } = await getProduct()
      // console.log(data);
      setProducts(data)

  }
  useEffect(() => {
      fetProducts()
  }, [])
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-[20%,75%]  mr-8">
        <SideCatProduct />
        <div className="">
          <FilProduct />
          <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
          <div className='max-w-[1440px] mx-auto mb-10'>
                <div className="rounded shadow-sm p-4 relative group hover:transition-all duration-300">
                    {products.map((item) => <Product key={item._id} data={item} />)}

                </div>
            </div>
            {/* <div className="rounded shadow-sm p-4 relative group hover:transition-all duration-300">
              <a href="">
                <img
                  src="image 5.png"
                  className="w-full h-auto object-cover mb-4 transition-transform transform hover:scale-105 rounded-xl"
                  alt=""
                />
              </a>
              <div className="text-center">
                <div className="text-lg my-2">
                  <a href="" className="text-gray-400 hover:text-black">
                    ÁO LEN HỌA TIẾT AL62132
                  </a>
                </div>
                <span className="text-sm font-bold">599.000đ</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
