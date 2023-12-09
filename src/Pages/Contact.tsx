import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { AddContactForm, addContactSchema } from '../schemas/contact';
import { addCotact } from '../api/conatct';
import { yupResolver } from '@hookform/resolvers/yup';
const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<AddContactForm>({
        resolver: yupResolver(addContactSchema)
    })
    const onSubmit = async (data: AddContactForm) => {
        const addItem = await addCotact(data)
        alert("Thêm sản phẩm thành công")
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
                    <form onSubmit={handleSubmit(onSubmit)} action="" className='mt-[20px]'>
                        <div className="row_2 mb-[20px]">
                            <input {...register("name")} className='w-[540px] p-[8px] border border-1' type="text" placeholder="Họ Và Tên" />
                            <p className='text-red-600'>{errors.name && errors.name.message}</p>
                        </div>
                        <div className="row_2 mb-[20px]">
                            <input {...register("email")} className='w-[540px] p-[8px] border border-1' type="text" placeholder="Email" />
                            <p className='text-red-600'>{errors.email && errors.email.message}</p>
                        </div>
                        <div className="row_2 mb-[20px]">
                            <input {...register("phonenumber")} className='w-[540px] p-[8px] border border-1' type="text" placeholder="Số Điện Thoại" />
                            <p className='text-red-600'>{errors.phonenumber && errors.phonenumber.message}</p>
                        </div>
                        <div className="row_2 mb-[20px]">
                            <input {...register("description")} className='w-[540px] px-[8px] py-[30px] border border-1' placeholder="" />
                            <p className='text-red-500'>{errors.description && errors.description.message}</p>
                        </div>
                        <div className="row_4">
                            <button type='submit' className='p-[10px] border border-1 bg-blue-600 text-white'>Gửi tin nhắn</button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact