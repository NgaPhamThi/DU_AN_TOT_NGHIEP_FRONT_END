
import React, { useState } from 'react'
import Category from './Category'
import Form from '../components/Layout/Form'

const HomePage = () => {
    return (
        <div>
            <Category />
            <div className='max-w-[1440px] mx-auto'>
                <h2 className="font-bold text-[27px] text-center pt-8 pb-8">Sản Phẩm Mới</h2>
                {/* <div className='flex justify-between items-center'>
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
                </div> */}
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
                {/* ListProduct1 */}
                <div className='max-w-[1440px] mx-auto mb-10'>
                <h2 className="font-bold text-[27px] text-center pt-8 pb-8">Áo Blazer Cao Cấp</h2>
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
            <div className='border-b-2'>
                <img className='w-full' src="slide_1.png" alt="" />
                <div className='max-w-[1440px] mx-auto '>
                    
                    <div className='text-center'>
                        <h2 className='font-bold text-[27px] text-center pt-8 pb-2'>GOOD THING GOOD NEWS</h2>
                        <span className='text-[14px] font-medium '>ĐÓN ĐẦU XU HƯỚNG, ĐỊNH HÌNH PHONG CÁCH</span>
                    </div>

                    <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">

                        {/* Card 1 */}
                        <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img src="new1.png" alt="Image 1" className="w-full h-48 object-cover rounded-t-lg transition-transform transform hover:scale-110" />

                            <div className="mt-4">
                                <p className="font-semibold">THE GMEN RA MẮT BỘ SƯU TẬP DÀNH CHO CÁC ‘TÍN ĐỒ’ LINEN</p>
                                <p className="text-gray-600 mt-2">Thương hiệu thời trang nam THE GMEN đã lựa chọn linen - chất liệu đáp ứng mong muốn về những trang phục tự do và thoải mái - cho bộ sưu tập hè 2023.</p>
                                <p className="text-gray-500 mt-4">ĐĂNG BỞI THỦY HÀNG</p>
                                <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-full">XEM THÊM</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img src="new2.png" alt="Image 2" className="w-full h-48 object-cover rounded-t-lg transition-transform transform hover:scale-110" />
                            <div className="mt-4">
                                <p className="font-semibold">THE GMEN: THÍCH, CHỌN VÀ TRẢI NGHIỆM</p>
                                <p className="text-gray-600 mt-2">Khi người Việt bắt đầu làm thời trang Việt, đó thực sự là một thử thách bởi việc bắt đầu, phát triển và nỗ lực khẳng định mình hoàn toàn từ con số 0.</p>
                                <p className="text-gray-500 mt-4">ĐĂNG BỞI THỦY HÀNG</p>
                                <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-full">XEM THÊM</button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img src="new3.png" alt="Image 3" className="w-full h-48 object-cover rounded-t-lg transition-transform transform hover:scale-110" />
                            <div className="mt-4">
                                <p className="font-semibold">"THE GMEN" - THƯƠNG HIỆU THỜI TRANG NỘI ĐỊA VÀ HÀNH TRÌNH 6 NĂM MANG TỚI SẢN PHẨM CHẤT LƯỢNG CHO KHÁCH HÀNG VIỆT</p>
                                <p className="text-gray-600 mt-2">“Không dừng lại ở việc mang đến cho khách hàng những sản phẩm chất lượng và dịch vụ chuyên nghiệp. THE GMEN còn muốn truyền cảm hứng và khích lệ khách hàng trở thành phiên bản tốt nhất của chính mình. Đó chính là các giá trị cốt lõi mà THE GMEN đã mang trong mình kể từ khi thành lập.”</p>
                                <p className="text-gray-500 mt-4">ĐĂNG BỞI THỦY HÀNG</p>
                                <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-full">XEM THÊM</button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <div className='max-w-[1440px] mx-auto mt-14   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='flex gap-5 items-center'>
                    <div>
                        <img src="ship.jpg" alt="" />
                    </div>
                    <div>
                        <p className='text-[16px] font-semibold pb-5'>Miễn phí vận chuyển</p>
                        <p className='text-[14px]'>Áp dụng cho mọi đơn hàng từ 500k</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <div>
                        <img src="doi.jpg" alt="" />
                    </div>
                    <div>
                        <p className='text-[16px] font-semibold pb-5'>Đổi trả dễ dàng</p>
                        <p className='text-[14px]'>7 ngày đổi trả vì bất kì lí do gì</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <div>
                        <img src="hotro.jpg" alt="" />
                    </div>
                    <div>
                        <p className='text-[16px] font-semibold pb-5'>Hỗ trợ nhanh chóng</p>
                        <p className='text-[14px]'>HOTLINE 24/7 : 0964942121</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <div>
                        <img src="thanhtoan.jpg" alt="" />
                    </div>
                    <div>
                        <p className='text-[16px] font-semibold pb-5'>Thanh toán đa dạng</p>
                        <p className='text-[14px]'>Thanh toán khi nhận hàng, Napas, Visa, Chuyển Khoản</p>
                    </div>
                </div>
            </div>
            <Form />
        </div>
    )
}

export default HomePage