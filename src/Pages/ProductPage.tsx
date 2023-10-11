import React, { useState } from 'react'

const ProductPage=()=>{

return(
<div className='container'>
    <div className="main1">
    <div className="p-4 transition duration-300 ease-in-out transform hover:scale-105"> <hr />
                <div className="w-32 h-32 mx-auto mb-3 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/426/984/products/ee20c9d7-b08d-412b-8962-ffb05c594243.jpg?v=1655435054027" alt="Category 1" className="object-cover w-full h-full" />
                </div>
                <h2 className="text-center text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600">Áo Thun</h2>
            </div>
           
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="blog6.png"
                        alt="Product 1"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 1
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -40%
                    </span>
                </div>

                {/* Sản phẩm 2 */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="blog6.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 2
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -40%
                    </span>
                </div>

                {/* Sản phẩm 3 và 4 tương tự... */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="blog6.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 3
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>
                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -39%
                    </span>
                </div>
                {/* ... */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="blog6.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 4
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -23%
                    </span>
                </div>
            </div>
    </div>
            {/* ---------------------- end main1 */}
            <div className='main2'><hr />
            <div className="p-4 transition duration-300 ease-in-out transform hover:scale-105">
                <div className="w-32 h-32 mx-auto mb-3 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://bizweb.dktcdn.net/thumb/grande/100/393/859/products/quan-short-nam-2.jpg?v=1648038017790" alt="Category 2" className="object-cover w-full h-full" />
                </div>
                <h2 className="text-center text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600">Quần Ngố</h2>
            </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 2.png"
                        alt="Product 1"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 1
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -40%
                    </span>
                </div>

                {/* Sản phẩm 2 */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 2.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 2
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -40%
                    </span>
                </div>

                {/* Sản phẩm 3 và 4 tương tự... */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 2.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 3
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>
                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -39%
                    </span>
                </div>
                {/* ... */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 2.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 4
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -23%
                    </span>
                </div>
            </div>
            </div>
            {/* --------------- end main2*/}
            <div className='main3'><hr />
            <div className="p-4 transition duration-300 ease-in-out transform hover:scale-105">
                <div className="w-32 h-32 mx-auto mb-3 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://hoaigiangshop.com/wp-content/uploads/2022/03/quan-au-sidetab-lung-cao.jpg" alt="Category 2" className="object-cover w-full h-full" />
                </div>
                <h2 className="text-center text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600">Quần Âu</h2>
            </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 3.png"
                        alt="Product 1"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 1
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -40%
                    </span>
                </div>

                {/* Sản phẩm 2 */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 3.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 2
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -40%
                    </span>
                </div>

                {/* Sản phẩm 3 và 4 tương tự... */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 3.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 3
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>
                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -39%
                    </span>
                </div>
                {/* ... */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 3.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 4
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -23%
                    </span>
                </div>
            </div>
            </div>
            {/* -------------- end main3 */}
            <div className='main4'><hr />
            <div className="p-4 transition duration-300 ease-in-out transform hover:scale-105">
                <div className="w-32 h-32 mx-auto mb-3 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://cf.shopee.vn/file/sg-11134201-22110-1dyyk64c0ijv0d" alt="Category 2" className="object-cover w-full h-full" />
                </div>
                <h2 className="text-center text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600">Áo Sơ Mi</h2>
            </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 4.png"
                        alt="Product 1"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 1
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -40%
                    </span>
                </div>

                {/* Sản phẩm 2 */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 4.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 2
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -40%
                    </span>
                </div>

                {/* Sản phẩm 3 và 4 tương tự... */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 4.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 3
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>
                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -39%
                    </span>
                </div>
                {/* ... */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 4.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 4
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -23%
                    </span>
                </div>
            </div>
            </div>
            {/* ----------------end main 4 */}
            <div className='main5'><hr />
            <div className="p-4 transition duration-300 ease-in-out transform hover:scale-105">
                <div className="w-32 h-32 mx-auto mb-3 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://images.toplist.vn/images/800px/shop-qteen-965773.jpg" alt="Category 2" className="object-cover w-full h-full" />
                </div>
                <h2 className="text-center text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600">Vest Blazer</h2>
            </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 5.png"
                        alt="Product 1"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 1
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -40%
                    </span>
                </div>

                {/* Sản phẩm 2 */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 5.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 2
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -40%
                    </span>
                </div>

                {/* Sản phẩm 3 và 4 tương tự... */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 5.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 3
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>
                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -39%
                    </span>
                </div>
                {/* ... */}
                <div className=" rounded shadow-sm p-4 relative group hover: transition-all duration-300">
                    <img
                        src="image 5.png"
                        alt="Product 2"
                        className="w-full h-[421px] object-cover mb-4 transition-transform transform hover:scale-105"
                    />
                    <div className='flex justify-between items-center pl-4 pr-4'>
                        <div>
                            <h2 className="cursor-pointer text-xl  font-semibold py-1 hover: transform hover:scale-110 transition-transform hover:text-red-500">
                                Sản phẩm 4
                            </h2>
                            <span className="text-lg line-through">500,000đ</span>
                            <span className="text-lg text-red-500 ml-2">300,000đ</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>

                    <span className="absolute left-0 top-0 mt-[16px] opacity-0 transform translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-red-500 text-white px-2 py-1">
                        -23%
                    </span>
                </div>
            </div>
            </div>
</div>
)
}

export default ProductPage;