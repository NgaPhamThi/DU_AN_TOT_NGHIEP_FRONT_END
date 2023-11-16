// import React from 'react'

import FilProduct from "../components/FilProduct";
import SideCatProduct from "../components/SideCatProduct";

const ProductPage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-[20%,75%]">
        <SideCatProduct />
        <div className="">
          <FilProduct />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto ml-4">
            <div className="rounded shadow-sm p-4 relative group hover: transition-all duration-300">
              <a href="">
                <img
                  src="image 5.png"
                  className="w-full h-auto object-cover mb-4 transition-transform transform hover:scale-105 rounded-xl"
                  alt=""
                />
              </a>
              <div className="text-center">
                <div className=" text-xl  my-4">
                  <a href="" className="text-gray-400 hover:text-black">
                    ÁO LEN HỌA TIẾT AL62132
                  </a>
                </div>
                <span className="mr-4 mt-4 text-sm font-bold">599.000đ</span>
              </div>
            </div>
            <div className="rounded shadow-sm p-4 relative group hover: transition-all duration-300">
              <a href="">
                <img
                  src="image 5.png"
                  className="w-full h-auto object-cover mb-4 transition-transform transform hover:scale-105 rounded-xl"
                  alt=""
                />
              </a>
              <div className="text-center">
                <div className=" text-xl  my-4">
                  <a href="" className="text-gray-400 hover:text-black">
                    ÁO LEN HỌA TIẾT AL62132
                  </a>
                </div>
                <span className="mr-4 mt-4 text-sm font-bold">599.000đ</span>
              </div>
            </div>
            <div className="rounded shadow-sm p-4 relative group hover: transition-all duration-300">
              <a href="">
                <img
                  src="image 5.png"
                  className="w-full h-auto object-cover mb-4 transition-transform transform hover:scale-105 rounded-xl"
                  alt=""
                />
              </a>
              <div className="text-center">
                <div className=" text-xl  my-4">
                  <a href="" className="text-gray-400 hover:text-black">
                    ÁO LEN HỌA TIẾT AL62132
                  </a>
                </div>
                <span className="mr-4 mt-4 text-sm font-bold">599.000đ</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto ml-4">
            <div className="rounded shadow-sm p-4 relative group hover: transition-all duration-300">
              <a href="">
                <img
                  src="image 5.png"
                  className="w-full h-auto object-cover mb-4 transition-transform transform hover:scale-105 rounded-xl"
                  alt=""
                />
              </a>
              <div className="text-center">
                <div className=" text-xl  my-4">
                  <a href="" className="text-gray-400 hover:text-black">
                    ÁO LEN HỌA TIẾT AL62132
                  </a>
                </div>
                <span className="mr-4 mt-4 text-sm font-bold">599.000đ</span>
              </div>
            </div>
            <div className="rounded shadow-sm p-4 relative group hover: transition-all duration-300">
              <a href="">
                <img
                  src="image 5.png"
                  className="w-full h-auto object-cover mb-4 transition-transform transform hover:scale-105 rounded-xl"
                  alt=""
                />
              </a>
              <div className="text-center">
                <div className=" text-xl  my-4">
                  <a href="" className="text-gray-400 hover:text-black">
                    ÁO LEN HỌA TIẾT AL62132
                  </a>
                </div>
                <span className="mr-4 mt-4 text-sm font-bold">599.000đ</span>
              </div>
            </div>
            <div className="rounded shadow-sm p-4 relative group hover: transition-all duration-300">
              <a href="">
                <img
                  src="image 5.png"
                  className="w-full h-auto object-cover mb-4 transition-transform transform hover:scale-105 rounded-xl"
                  alt=""
                />
              </a>
              <div className="text-center">
                <div className=" text-xl  my-4">
                  <a href="" className="text-gray-400 hover:text-black">
                    ÁO LEN HỌA TIẾT AL62132
                  </a>
                </div>
                <span className="mr-4 mt-4 text-sm font-bold">599.000đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
