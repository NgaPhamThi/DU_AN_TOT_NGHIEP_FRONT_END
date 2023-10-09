import React, { useState } from 'react'

const HomePage = () => {
    return (

        <div className='max-w-[1440px] mx-auto'>
            <h2 className="font-bold text-[27px] text-center pt-8 pb-8">Sản Phẩm Mới</h2>
            <div className='flex justify-between items-center'>
                <div>
                <div className="mb-4">
                <label className="text-lg font-semibold mb-2">Lọc theo giá:</label>
                <div className="flex space-x-2">
                    <input
                        type="number"
                        placeholder="Từ"
                        className="border rounded px-2 py-1"
                    />
                    <span className="mx-2">-</span>
                    <input
                        type="number"
                        placeholder="Đến"
                        className="border rounded px-2 py-1"
                    />
                    <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                        Lọc
                    </button>
                </div>
            </div>
                </div>
                <div>
                    <a href="">Xem tất cả</a>
                </div>
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
    )
}

export default HomePage