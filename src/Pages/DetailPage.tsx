// import React from 'react'
import { useParams } from "react-router-dom"
import { getById, getProduct } from "../api/product"
import { useEffect, useState } from "react"
import { IProduct } from "../interfaces/product"
import Product from "../components/product"

const DetailPage = () => {
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const [products, setProducts] = useState<IProduct[]>([])
    const { id } = useParams()
    // console.log(id);
    const fetProduct = async () => {
        if (id) {
            const { data } = await getById(id)
            // console.log(data);
            setProduct(data)
        }
    }
    useEffect(() => {
        fetProduct()
    }, [])
    // console.log(product);

    const fetProducts = async () => {
        const { data } = await getProduct()
        // console.log(data);
        setProducts(data)
    }
    useEffect(() => {
        fetProducts()
    }, [])

    return (

        <div className='mx-[100px] mt-[50px]'>
            <div className="product_detail_row_1 flex mb-[80px]">
                <div className=" basis-3/6">
                    <div className="image_detail_big">
                        <img className="w-[700px] h-[550px]" src={product.img} alt="" />
                    </div>
                    <div className="image_detail_small mt-[10px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <img className="w-[150px] h-[150px] mb-[20px]" src={product.img} alt="" />
                        <img className="w-[150px] h-[150px] mb-[20px]" src={product.img} alt="" />
                        <img className="w-[150px] h-[150px] mb-[20px]" src={product.img} alt="" />
                        <img className="w-[150px] h-[150px] mb-[20px]" src={product.img} alt="" />
                    </div>

                </div>
                <div className=" basis-3/6 pl-[100px]">
                    <h2 className="text-[20px] font-bold mb-[20px]">ÁO VEST THIẾT KẾ AK06392</h2>
                    <div className="">
                        <span>Thương hiệu:</span>
                        <span>NEM</span>
                    </div>
                    <div className="">
                        <span>Mã SP:</span>
                        <span>063921612353080418</span>
                    </div>
                    <h3 className="my-[10px] text-[24px] font-bold">1,399,000₫</h3>
                    <div className="size mb-[20px]">
                        <span className="text-[17px] mb-[10px]">Kích thước</span>
                        <ul className="flex gap-[10px] mt-[10px]">
                            <li className="border px-[10px] py-[5px] hover:border-gray-950">size 4</li>
                            <li className="border px-[10px] py-[5px] hover:border-gray-950">size 6</li>
                            <li className="border px-[10px] py-[5px] hover:border-gray-950">size 8</li>
                            <li className="border px-[10px] py-[5px] hover:border-gray-950">size 10</li>
                            <li className="border px-[10px] py-[5px] hover:border-gray-950">size 12</li>
                        </ul>
                    </div>
                    <div className="color flex gap-[20px] mb-[20px]">
                        <div className="w-[50px] h-[50px] bg-blue-400 border rounded-full"></div>
                        <div className="w-[50px] h-[50px] bg-gray-400  border rounded-full"></div>
                        <div className="w-[50px] h-[50px] bg-black  border rounded-full"></div>

                    </div>
                    <div className="mb-[30px]">
                        <h3><a href="">HƯỚNG DẪN CHỌN SIZE</a></h3>
                    </div>
                    <div className="quantity flex gap-[50px]">
                        <span>Số lượng</span>
                        <div className=" flex border border-2 border-gray-300 px-[20px] py-[5px] gap-[20px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            <span>2</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </div>
                    </div>
                    <div className="shopping_cart my-[20px]">
                        <div className="mb-[20px]">
                            <button className="border border-gray-800 px-[100px] py-[10px]">THÊM VÀO GIỎ</button>
                        </div>
                        <div className="">
                            <button className="border px-[118px] py-[10px] bg-black text-white">MUA NGAY</button>
                        </div>
                    </div>
                    <div className="describe">
                        <div className="">
                            <span className="text-[16px] font-bold">Chất liệu:</span>
                            <span>vải thô</span>
                        </div>
                        <div className="">
                            <span className="text-[16px] font-bold">Kiểu dáng:</span>
                            <span>áo vest thiết kế chiết eo, cổ bẻ 2 ve, tone màu xanh trơn</span>
                        </div>
                        <div className="">
                            <span className="text-[16px] font-bold">Sản phẩm thuộc dòng sản phẩm :</span>
                            <span>NEM NEW</span>
                        </div>
                        <div className="">
                            <span className="text-[16px] font-bold">Thông tin người mẫu:</span>
                            <span>mặc sản phẩm size 2</span>
                        </div>
                        <div className="">
                            <span className="text-[16px] font-bold">Sản phẩm kết hợp:</span>
                            <span>quần Q06402</span>
                        </div>
                    </div>


                </div>
            </div>
            <hr />
            <div className="product_detail_row_2 mt-[50px]">
                <div className="describe_product pr-[20px] mt-[5px]">
                    <div className="describe_product_row mt-[30px]">
                        <div className="title_describe bg-neutral-400 h-[60px] flex items-center">
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
                                <div className="flex gap-[20px]">
                                    <button className=' border px-[30px] py-[5px] rounded-lg bg-white'>Tất cả </button>
                                    <button className='border px-[30px] py-[5px] rounded-lg bg-white'>5 sao(5,4 k)</button>
                                    <button className='border px-[30px] py-[5px] rounded-lg bg-white'>4 sao(806)</button>
                                    <button className='border px-[30px] py-[5px] rounded-lg bg-white'>3 sao(206)</button>
                                    <button className='border px-[30px] py-[5px] rounded-lg bg-white'>2 sao(106)</button>
                                    <button className='border px-[30px] py-[5px] rounded-lg bg-white'>1 sao(6)</button>
                                </div>
                                <div className="mt-[20px] flex gap-[50px]">
                                    <button className='border px-[30px] py-[5px] rounded-lg bg-white'>có bình luận (2,4 k)</button>
                                    <button className='border px-[30px] py-[5px] rounded-lg bg-white'>có hình ảnh/ video(1,1k) </button>
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
                </div>

            </div>
            <div className=" text-center m-[50px]">
                <h2 className="text-[24px] font-bold">SẢN PHẨM TƯƠNG TỰ</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((item) => <Product key={item._id} data={item} />)}
            </div>
        </div>
    )
}

export default DetailPage