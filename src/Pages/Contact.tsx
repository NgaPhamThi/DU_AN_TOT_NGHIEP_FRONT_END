import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { addCotact } from '../api/contact';
import { toast } from "react-toastify";
const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async (data: any) => {
        const addItem = await addCotact(data)
        toast.success('Add product Susscessfully !', { autoClose: 2000 })
        console.log("Them contact", addItem);
    }
    return (
        <div className='w-[1000px] mx-auto'>
            {/* <div className="mt-[50px]">
                <h2 className='text-[25px]'>CONTACT</h2>
            </div> */}
            <div className=" flex gap-[200px] mt-[80px]">
                <div className="info_contact">
                    <h3 className='text-[25px]'>Thông Tin Liên Lạc</h3>
                    <div className="content_contact">
                        <div className=" flex gap-[20px] my-[20px]">
                            <div className="icon_contact">
                                <CiLocationOn className="w-[35px] h-[35px]  text-gray-500" />
                            </div>
                            <div className="text_contact">
                                <p className='text-[18px]'>180 P. Đông Các, Chợ Dừa, Đống Đa, Hà Nội</p>
                            </div>
                        </div>
                        <div className="flex gap-[20px] mb-[20px]">
                            <div className="icon_contact">
                                <MdOutlineEmail className="w-[35px] h-[35px]  text-gray-500" />
                            </div>
                            <div className="text_contact">
                                <p className='text-[18px]'>TNDshop@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-[20px] mb-[20px]">
                            <div className="icon_contact">
                                <FaPhoneAlt className="w-[30px] h-[30px]  text-gray-500" />
                            </div>
                            <div className="text_contact">
                                <p className='text-[18px]'>1900 252520</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question_contact">
                    <h3 className='text-[25px]'>Có bất kỳ câu hỏi nào! Hoặc Đặt lịch hẹn</h3>
                    <form className="w-1/3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4 mt-[30px]">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="categoryName"
                            >

                            </label>
                            <input
                                className="shadow appearance-none border rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Nhập Tên"
                                id="categoryName"
                                type="text"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span style={{ color: 'red' }}>Bắt buộc nhập tên !</span>}
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="categoryImage"
                            >

                            </label>
                            <input
                                className="shadow appearance-none border rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Nhập email"
                                id="categoryImage"
                                type="text"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span style={{ color: 'red' }}>Bắt buộc thêm ảnh !</span>}
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="categoryImage"
                            >

                            </label>
                            <input
                                className="shadow appearance-none border rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Nhập Số điện thoại"
                                id="categoryImage"
                                type="text"
                                {...register("phonenumber", { required: true })}
                            />
                            {errors.phonenumber && <span style={{ color: 'red' }}>Bắt buộc thêm ảnh !</span>}
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="categoryImage"
                                {...register("description", { required: true })}
                            >

                            </label>
                            <textarea className="shadow appearance-none border rounded w-[500px] h-[100px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" {...register("description")}>

                            </textarea>
                            {errors.description && <span style={{ color: 'red' }}>Bắt buộc nhập mô tả !</span>}
                        </div>

                        <div className="flex justify-between items-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Gửi Tin Nhắn
                            </button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact