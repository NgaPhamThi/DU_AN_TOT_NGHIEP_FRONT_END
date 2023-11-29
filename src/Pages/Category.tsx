import React, { useEffect, useState } from 'react'
import { ICategories } from '../interfaces/categories'
import { getCategory } from '../api/categories'



const Category = () => {
    const [categories, setcategories] = useState<ICategories[]>([])
    useEffect(() => {
        async function fetchProduct() {
            const { data } = await getCategory();
            setcategories(data);
            console.log(data);

        }
        fetchProduct()
    }, [])
    return (
        <div>
            <img className='w-full' src="https://aristino.com/Data/ResizeImage/images/banner/n%C4%83m%202023/Bannner-website-Aristino-mobile-4_1920x750x0x0x2.webp" alt="" />
            <div className='bg-gray-200  '>
                <h2 className="font-bold text-[27px] text-center pt-8 pb-8">Danh Mục</h2>
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-10 ">
                    {categories.slice(0, 5).map((category) => (
                        <div className="p-4 transition duration-300 cursor-pointer ease-in-out transform hover:scale-105">
                            <div className="w-32 h-32 mx-auto mb-3 bg-gray-300 rounded-full overflow-hidden">
                                <img src={category.img} alt="Category 1" className="object-cover w-full h-full" />
                            </div>
                            <h2 className="text-center text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600">{category.name}</h2>
                        </div>
                    ))}





                    {/* ... Bạn có thể tiếp tục thêm các mục tương tự ... */}
                </div>
            </div>
            <div>
                <img className='w-full' src="https://aristino.com/Data/upload/images/BANNER/Banner-Web_1.jpg" alt="" />
            </div>
        </div>

    )
}

export default Category