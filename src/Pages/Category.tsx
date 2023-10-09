import React from 'react'



const Category = () => {
    return (
        <div>
            <img className='w-full' src="https://aristino.com/Data/ResizeImage/images/banner/n%C4%83m%202023/Bannner-website-Aristino-mobile-4_1920x750x0x0x2.webp" alt="" />
            <div className='bg-gray-200  '>
            <h2 className="font-bold text-[27px] text-center pt-8 pb-8">Danh Mục</h2>
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-10 ">
            {/* Example Item 1 */}
            <div className="p-4 transition duration-300 ease-in-out transform hover:scale-105">
                <div className="w-32 h-32 mx-auto mb-3 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/426/984/products/ee20c9d7-b08d-412b-8962-ffb05c594243.jpg?v=1655435054027" alt="Category 1" className="object-cover w-full h-full" />
                </div>
                <h2 className="text-center text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600">Áo Thun</h2>
            </div>

            {/* Example Item 2 */}
            <div className="p-4 transition duration-300 ease-in-out transform hover:scale-105">
                <div className="w-32 h-32 mx-auto mb-3 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://bizweb.dktcdn.net/thumb/grande/100/393/859/products/quan-short-nam-2.jpg?v=1648038017790" alt="Category 2" className="object-cover w-full h-full" />
                </div>
                <h2 className="text-center text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600">Quần Ngố</h2>
            </div>
            <div className="p-4 transition duration-300 ease-in-out transform hover:scale-105">
                <div className="w-32 h-32 mx-auto mb-3 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://hoaigiangshop.com/wp-content/uploads/2022/03/quan-au-sidetab-lung-cao.jpg" alt="Category 2" className="object-cover w-full h-full" />
                </div>
                <h2 className="text-center text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600">Quần Âu</h2>
            </div>
            <div className="p-4 transition duration-300 ease-in-out transform hover:scale-105">
                <div className="w-32 h-32 mx-auto mb-3 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://cf.shopee.vn/file/sg-11134201-22110-1dyyk64c0ijv0d" alt="Category 2" className="object-cover w-full h-full" />
                </div>
                <h2 className="text-center text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600">Áo Sơ Mi</h2>
            </div>
            <div className="p-4 transition duration-300 ease-in-out transform hover:scale-105">
                <div className="w-32 h-32 mx-auto mb-3 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://images.toplist.vn/images/800px/shop-qteen-965773.jpg" alt="Category 2" className="object-cover w-full h-full" />
                </div>
                <h2 className="text-center text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-600">Vest Blazer</h2>
            </div>

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