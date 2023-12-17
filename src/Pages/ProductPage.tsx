// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react'; // Import useState and useEffect
import { getProduct } from '../api/product';
import { IProduct } from '../interfaces/product';

import FilProduct from "../components/FilProduct";
import SideCatProduct from "../components/SideCatProduct";

const ProductPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    try {
      const { data } = await getProduct();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-[20%,75%]  mr-8">
        <SideCatProduct />
        <div className="">
          <FilProduct />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
            {products.map((product) => (
              <div key={product._id} className="rounded shadow-sm p-4 relative group hover:transition-all duration-300">
                <a href="">
                  <img
                    src={product.img}
                    className="w-full h-auto object-cover mb-4 transition-transform transform hover:scale-105 rounded-xl"
                    alt=""
                  />
                </a>
                <div className="text-center">
                  <div className="text-lg my-2">
                    <a href="" className="text-gray-400 hover:text-black">
                      {product.name}
                    </a>
                  </div>
                  <span className="text-sm font-bold">{`${product.price}đ`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
