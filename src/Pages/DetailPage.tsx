import React from 'react'

const DetailPage = () => {
    return (
        <div className='mx-[50px] mt-[50px]'>
            <div className="product_detail_row_1 lg:flex lg:gap-[50px]">
                <div className="row_1_column_1 flex  gap-[40px]">
                    <div className="image_detail_product_1  hidden lg:block">
                        <ul>
                            <a href=""><img className='w-[150px] h-[160px] mb-[20px]' src="https://lzd-img-global.slatic.net/g/p/c8717c31871ccc892aff7111a20b01c5.jpg_720x720q80.jpg" alt="" /></a>
                            <a href=""><img className='w-[150px] h-[160px] mb-[20px]' src="https://lzd-img-global.slatic.net/g/p/c8717c31871ccc892aff7111a20b01c5.jpg_720x720q80.jpg" alt="" /></a>
                            <a href=""><img className='w-[150px] h-[160px] mb-[20px]' src="https://lzd-img-global.slatic.net/g/p/c8717c31871ccc892aff7111a20b01c5.jpg_720x720q80.jpg" alt="" /></a>
                            <a href=""><img className='w-[150px] h-[160px] mb-[20px]' src="https://lzd-img-global.slatic.net/g/p/c8717c31871ccc892aff7111a20b01c5.jpg_720x720q80.jpg" alt="" /></a>
                        </ul>
                    </div>
                    <div className="image_detail_product_1">
                        <img className='w-[600px] h-[700px]' src="https://lzd-img-global.slatic.net/g/p/c8717c31871ccc892aff7111a20b01c5.jpg_720x720q80.jpg" alt="" />
                    </div>
                </div>
                <div className="row_1_column_2">
                    <h3 className='text-[30px]'>Áo Khoác jean Nam Hàn Quốc </h3>
                    <div className="flex gap-[50px] mt-[10px]">
                        <div className="id_product flex gap-[10px] text-[14px]">
                            <span>SKU:</span>
                            <span>FASH072223SHO </span>
                        </div>
                        <div className="product_status">
                            <span>Hiện tại còn một sản phẩm </span>
                        </div>
                    </div>
                    <div className="row_price_row flex gap-[50px] mt-[10px]">
                        <span className='price_new text-[20px] text-red-600'>346,500 đ  </span>
                        <span className='price_old line-through text-[20px] text-gray-500'>495,000 đ  </span>
                    </div>
                    <div className="row_id_sale flex gap-[40px] mt-[10px] items-center">
                        <div className="">
                            <span className='text-[14px]'>Mã Giảm Giá: </span>
                        </div>
                        <div className="flex gap-[50px]">
                            <div className="px-[10px] py-[5px] bg-neutral-300 text-center">
                                <span className='text-[14px]'>Giảm 3k</span>
                            </div>
                            <div className="px-[10px] py-[5px] bg-neutral-300">
                                <span className='text-[14px]'>Giảm 5k</span>
                            </div>
                        </div>
                    </div>
                    <div className="row_color">
                        <div className="text_color">
                            <span className='text-[14px]'>Chọn Màu </span>
                        </div>
                        <div className="product_size">
                            <div className="color_product flex gap-[30px] mt-[20px]">
                                <div className="w-[100px] h-[100px] bg-slate-700"> </div>
                                <div className="w-[100px] h-[100px] bg-red-400"></div>
                                <div className="w-[100px] h-[100px] bg-blue-500"></div>
                            </div>
                            <div className="size pt-[20px] flex justify-between">
                                <div className="size_product flex gap-[30px]">
                                    <div className="px-[30px] py-[3px] border rounded-md border-black">
                                        <span>S</span>
                                    </div>
                                    <div className="px-[30px] py-[3px] border rounded-md border-black">
                                        <span>M</span>
                                    </div>
                                    <div className="px-[30px] py-[3px] border rounded-md border-black">
                                        <span>L</span>
                                    </div>

                                </div>
                                <div className="text flex gap-[10px] items-center">
                                    <span className='text-[14px]'>Bảng size </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row_quantity flex gap-[40px] mt-[20px]">
                        <div className="text_quantity mt-[15px]">
                            <span>Số Lượng :</span>
                        </div>
                        <div className="quantity mt-[10px]">
                            <form action="" className='flex'>
                                <div className="w-[40px] bg-neutral-400 text-center"> <span>+</span></div>
                                <input className='w-[60px] bg-neutral-600' type="text" />
                                <div className="w-[40px] h-[30px] bg-neutral-400 text-center pb-[15px]">  <span>_</span></div>

                            </form>
                        </div>
                    </div>
                    <div className="cart mt-[20px] flex gap-[30px]">
                        <div className="flex gap-[30px] w-[240px] h-[40px] bg-neutral-300 items-center border rounded-md">
                            <div className="icon_cart pl-[35px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </div>
                            <div className="text_cart_1">
                                <span className='text-[14px]'>THÊM VÀO GIỎ </span>
                            </div>
                        </div>
                        <div className="pt-[5px] w-[240px] h-[40px] bg-black items-center text-center border rounded-md items-center">
                            <span className='text-[14px] text-white'>MUA NGAY</span>
                        </div>
                    </div>

                </div>

            </div>
            <div className="product_detail_row_2 flex gap-[50px] my-[50px]">
                <div className="describe_product basis-5/6">
                    <div className="describe_product_row">
                        <div className="title_describe bg-neutral-400 h-[40px]">
                            <h3 className='text-[20px] px-[50px] font-bold pt-[5px]'>Chi Tiết Sản Phẩm </h3>
                        </div>
                        <div className="content_describe my-[30px] flex gap-[50px]">
                            <div className="title_item">
                                <ul>
                                    <li>Kiểu dáng</li>
                                    <li>Xuất xứ</li>
                                    <li>Loại trang phục </li>
                                    <li>Chất liệu </li>
                                    <li>Kho hàng </li>
                                    <li>Gửi từ </li>
                                </ul>
                            </div>
                            <div className="content_item">
                                <ul>
                                    <li>Váy xèo </li>
                                    <li>Trung Quốc </li>
                                    <li>Váy </li>
                                    <li>Thun </li>
                                    <li>1745678 </li>
                                    <li>Hà nội </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="describe_product_row">
                        <div className="title_describe bg-neutral-400 h-[40px]">
                            <h3 className='text-[20px] px-[50px] font-bold pt-[5px]'>Mô Tả Sản Phẩm  </h3>

                        </div>
                        <div className="content_describe">
                            <div className="content_describe_row_1 w-[500px] my-[20px]">
                                <p>Bộ Quần Áo Thun Phông Cổ Tròn Phối Màu Thể Thao

                                    Thiết kế thời trang, đơn giản không kém phần hiện đại

                                    Kiểu dáng gọn nhẹ, năng động

                                    Chất vải thun mềm mại, dễ thấm hút mồ hôi
                                </p>
                            </div>
                            <div className="content_describe_row_2">
                                <div className="">
                                    <h4>Hướng dẫn chọn size:</h4>
                                    <ul>
                                        <li>- M (32-45Kg,1m6)</li>
                                        <li>- L (46-58Kg, 1m7)</li>
                                        <li>- XL (59-68Kg, 1m75)</li>
                                        <li>-XXL(69-85kg, 1m85)</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="content_describe_row_3">
                                <div className="">
                                    <h4>Lưu ý: </h4>
                                    <ul>
                                        <li>- Nếu chưa chắc chắn về chọn size sản phẩm</li>
                                        <li>- Nếu khách thích mặc ôm body hoặc mặc rộng thoải mái</li>
                                        <li>- Nếu khách form người không cân đối (Béo, gầy, thấp...)</li>
                                        <li> INBOX trực tiếp cho shop để được tư vấn size nhé</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="content_describe_row_4">
                                <div className="">
                                    <h4>Chế độ bảo hành :</h4>
                                    <ul>
                                        <li>- Tất cả các sản phẩm đều được shop bảo hành</li>
                                        <li>- Đối với sản phẩm lỗi/đơn hàng thiếu sản phẩm, quý khách vui lòng quay video trước khi bóc hàng, nhắn tin/gọi nga</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="content_describe_row_5">
                                <div className="">
                                    <h4>Cam kết : </h4>
                                    <ul>
                                        <li>- Mang đến cho khách hàng những sản phẩm với chất lượng tốt nhất trong tầm giá</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="describe_product_row mt-[30px]">
                        <div className="title_describe bg-neutral-400 h-[40px]">
                            <h3 className='text-[20px] px-[50px] font-bold pt-[5px]'>ĐÁNH GIÁ SẢN PHẨM  </h3>
                        </div>
                        <div className="content_describe flex mt-[30px] bg-neutral-400 h-[130px] pl-[50px]">

                            <div className=" basis-1/6 pt-[25px]">
                                <span className='text-[35px]'>4.6 </span> <span>trên 5</span>
                                <div className="icon_user flex text-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                            </div>
                            <div className=" basis-5/6 pt-[20px]">
                                <div className="">
                                    <button className='np_star_item'>Tất cả </button>
                                    <button className='np_star_item'>5 sao(5,4 k )</button>
                                    <button className='np_star_item'>4 sao(806)</button>
                                    <button className='np_star_item'>3 sao(206)</button>
                                    <button className='np_star_item'>2 sao(106)</button>
                                    <button className='np_star_item'>1 sao(6)</button>
                                </div>
                                <div className="mt-[20px]">
                                    <button className='np_star_item'>có bình luận (2,4 k)</button>
                                    <button className='np_star_item'>có hình ảnh/ video(1,1k) </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row_comment mt-[30px] pl-[40px] mb-[30px]">
                        <div className="row_comment_1 flex gap-[20px]">
                            <div className="image_avatar">
                                <img className='w-[80px] h-[80px] border rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEK0H4Ef9q05MCuUsYpnPdcHlz8fEhIYT9VA&usqp=CAU" alt="" />
                            </div>
                            <div className="name_user pt-[30px]">
                                <h3 className='text-[18px]'>Nga phạm </h3>
                                <div className="icon_user text-red-600 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="row_comment_2 flex">
                            <div className="date_comment pr-[10px]">
                                <span>2023-10-5</span><span>10:10</span>
                            </div>
                            <div className="type_product border-l border-gray-600 pl-[10px]">
                                <span> Phân loại hàng:</span>
                                <span>4</span>
                            </div>
                        </div>
                        <div className="row_comment_3 ">
                            <div className="">
                                <ul>
                                    <li><span>Đúng với mô tả:</span><span>Đúng với mô tả</span></li>
                                    <li><span>Chất liệu:</span><span>cotton mát</span></li>
                                    <li><span>Màu sắc: </span><span>đen black</span></li>
                                </ul>
                            </div>
                            <p> <p>
                                Quần ảo rất ưng mắt vải mặc thoáng mát khả năng rất mát vào mùa hè
                                Sẽ ghé shop lần tiếp gần nhất
                            </p></p>
                        </div>
                        <div className="row_comment_4 lg:flex lg:gap-[45px] mt-[30px] lg:mt-[30px]">
                            <img className='w-[180px] h-[200px] mt-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8bvIuqKf78T_K_OuUiNkFInsv7OIqyPmyVzVG9YBsBKt6Hs8A_MO6NNMbXLCSvHuZvo&usqp=CAU" alt="" />
                            <img className='w-[180px] h-[200px]  mt-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8bvIuqKf78T_K_OuUiNkFInsv7OIqyPmyVzVG9YBsBKt6Hs8A_MO6NNMbXLCSvHuZvo&usqp=CAU" alt="" />
                            <img className='w-[180px] h-[200px]  mt-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8bvIuqKf78T_K_OuUiNkFInsv7OIqyPmyVzVG9YBsBKt6Hs8A_MO6NNMbXLCSvHuZvo&usqp=CAU" alt="" />
                        </div>
                    </div>
                    <hr />
                    <div className="row_product_new mt-[20px] ">
                        <div className="title mb-[20px] text-[20px]">
                            <h3>Sản Phẩm Mới</h3>
                        </div>
                        <div className="row_product_new_main grid grid-cols-2 gap-[20px] lg:grid lg:grid-cols-5 lg:gap-[30px]">
                            <div className="">
                                <div className="image">
                                    <img className='w-[200px] h-[200px]' src="https://ph-live-01.slatic.net/p/4de0a5ec67409509af0802ece2b46f1b.jpg" alt="" />
                                </div>
                                <div className=" mt-[10px]">
                                    <h3 className='text-[15px]'>áo Sơ Mi Nam Trẻ Hàn Quốc</h3>
                                    <span className='text-[14px]  text-red-500'>220 000 đ</span>
                                </div>
                            </div>
                            <div className="">
                                <div className="image">
                                    <img className='w-[200px] h-[200px]' src="https://ph-live-01.slatic.net/p/4de0a5ec67409509af0802ece2b46f1b.jpg" alt="" />
                                </div>
                                <div className=" mt-[10px]">
                                    <h3 className='text-[15px]'>áo Sơ Mi Nam Trẻ Hàn Quốc</h3>
                                    <span className='text-[14px]  text-red-500'>220 000 đ</span>
                                </div>
                            </div>
                            <div className="">
                                <div className="image">
                                    <img className='w-[200px] h-[200px]' src="https://ph-live-01.slatic.net/p/4de0a5ec67409509af0802ece2b46f1b.jpg" alt="" />
                                </div>
                                <div className=" mt-[10px]">
                                    <h3 className='text-[15px]'>áo Sơ Mi Nam Trẻ Hàn Quốc</h3>
                                    <span className='text-[14px]  text-red-500'>220 000 đ</span>
                                </div>
                            </div>
                            <div className="">
                                <div className="image">
                                    <img className='w-[200px] h-[200px]' src="https://ph-live-01.slatic.net/p/4de0a5ec67409509af0802ece2b46f1b.jpg" alt="" />
                                </div>
                                <div className=" mt-[10px]">
                                    <h3 className='text-[15px]'>áo Sơ Mi Nam Trẻ Hàn Quốc</h3>
                                    <span className='text-[14px]  text-red-500'>220 000 đ</span>
                                </div>
                            </div>
                            <div className="">
                                <div className="image">
                                    <img className='w-[200px] h-[200px]' src="https://ph-live-01.slatic.net/p/4de0a5ec67409509af0802ece2b46f1b.jpg" alt="" />
                                </div>
                                <div className=" mt-[10px]">
                                    <h3 className='text-[15px]'>áo Sơ Mi Nam Trẻ Hàn Quốc</h3>
                                    <span className='text-[14px]  text-red-500'>220 000 đ</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="Products_abs basis-1/6 hidden lg:block">
                    <div className="mb-[40px]">
                        <div className="image">
                            <img className='w-[200px] h-[200px]' src="https://ph-live-01.slatic.net/p/4de0a5ec67409509af0802ece2b46f1b.jpg" alt="" />
                        </div>
                        <div className=" mt-[10px] pl-[10px]">
                            <h3 className='text-[15px]'>áo Sơ Mi Nam Trẻ Hàn Quốc</h3>
                            <span className='text-[14px]  text-red-500'>220 000 đ</span>
                        </div>
                    </div>
                    <div className="mb-[40px]">
                        <div className="image">
                            <img className='w-[200px] h-[200px]' src="https://ph-live-01.slatic.net/p/4de0a5ec67409509af0802ece2b46f1b.jpg" alt="" />
                        </div>
                        <div className=" mt-[10px] pl-[10px]">
                            <h3 className='text-[15px]'>áo Sơ Mi Nam Trẻ Hàn Quốc</h3>
                            <span className='text-[14px]  text-red-500'>220 000 đ</span>
                        </div>
                    </div>
                    <div className="mb-[40px]">
                        <div className="image">
                            <img className='w-[200px] h-[200px]' src="https://ph-live-01.slatic.net/p/4de0a5ec67409509af0802ece2b46f1b.jpg" alt="" />
                        </div>
                        <div className=" mt-[10px] pl-[10px]">
                            <h3 className='text-[15px]'>áo Sơ Mi Nam Trẻ Hàn Quốc</h3>
                            <span className='text-[14px]  text-red-500'>220 000 đ</span>
                        </div>
                    </div>
                    <div className="mb-[40px]">
                        <div className="image">
                            <img className='w-[200px] h-[200px]' src="https://ph-live-01.slatic.net/p/4de0a5ec67409509af0802ece2b46f1b.jpg" alt="" />
                        </div>
                        <div className=" mt-[10px] pl-[10px]">
                            <h3 className='text-[15px]'>áo Sơ Mi Nam Trẻ Hàn Quốc</h3>
                            <span className='text-[14px]  text-red-500'>220 000 đ</span>
                        </div>
                    </div>
                    <div className="mb-[40px]">
                        <div className="image">
                            <img className='w-[200px] h-[200px]' src="https://ph-live-01.slatic.net/p/4de0a5ec67409509af0802ece2b46f1b.jpg" alt="" />
                        </div>
                        <div className=" mt-[10px] pl-[10px]">
                            <h3 className='text-[15px]'>áo Sơ Mi Nam Trẻ Hàn Quốc</h3>
                            <span className='text-[14px]  text-red-500'>220 000 đ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage