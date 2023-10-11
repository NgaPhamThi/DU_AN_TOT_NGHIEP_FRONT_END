// import React from 'react'

const HomePage = () => {
    return (
        <div className="mx-auto">
        <section>
            <div className="category text-center">
                <h2 className="font-bold text-[27px] pt-8 pb-8">Danh Mục</h2>
                <div className="flex max-w-[1120px] mx-auto gap-20 text-[16px]">
                    <a className="hover:text-red-400" href="">
                        <img className="pb-3" src="image-removebg-preview (1) 1.png" alt=""/>
                        <span className="font-thin">Áo Sơ Mi</span>
                    </a>
                    <a className="hover:text-red-400" href="">
                        <img className="pb-3" src="image-removebg-preview (2) 1.png" alt=""/>
                        <span className="font-thin">Áo Thun</span>
                    </a>
                    <a className="hover:text-red-400" href="">
                        <img className="pb-3" src="image-removebg-preview (3) 1.png" alt=""/>
                        <span className="font-thin">Quần</span>
                    </a>
                    <a className="hover:text-red-400" href="">
                        <img className="pb-3" src="image-removebg-preview (4) 1.png" alt=""/>
                        <span className="font-thin">váy</span>
                    </a>
                    <a className="hover:text-red-400" href="">
                        <img className="pb-3" src="image-removebg-preview (5) 1.png" alt=""/>
                        <span className="font-thin">Đầm</span>
                    </a>
                </div>
            </div>
            <div className="product max-w-[1440px] mx-auto">
                <h2 className="font-bold text-center text-[27px] pt-8 pb-8">Tổng Sản Phẩm</h2>
                <div className="container mx-auto mt-5">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="product-card p-4">
                            <a className="name" href="">
                                <img src="image 2.png" alt="Sản phẩm 1"
                                    className="product-image w-full h-[421px] transition-transform transform duration-300 ease-in-out"/>
                                <h3 className="text-lg font-semibold mt-2">Đầm midi 2 dây smocking lưng</h3>
                            </a>
                            <div className="grid grid-cols-2 -space-x-24 pt-3">
                                <p className="text-gray-500">19,99₫</p>
                                <p className="text-red-500">395,000₫</p>
                            </div>
                        </div>
                        <div className="product-card p-4">
                            <a className="name" href="name">
                                <img src="image 3.png" alt="Sản phẩm 1"
                                    className="product-image w-full h-[421px] transition-transform transform duration-300 ease-in-out"/>
                                <h3 className="text-lg font-semibold mt-2">Đầm mini thêu cotton cổ tim tay..</h3>
                            </a>
                            <div className="grid grid-cols-2 -space-x-24 pt-3">
                                <p className="text-gray-500">19,99₫</p>
                                <p className="text-red-500">395,000₫</p>
                            </div>

                        </div>
                        <div className="product-card p-4">
                            <a className="name" href="">
                                <img src="image 4.png" alt="Sản phẩm 1"
                                    className="product-image w-full h-[421px] transition-transform transform duration-300 ease-in-out"/>
                                <h3 className="text-lg font-semibold mt-2">Quần Jogger</h3>
                            </a>
                            <div className="grid grid-cols-2 -space-x-24 pt-3">
                                <p className="text-gray-500">19,99₫</p>
                                <p className="text-red-500">395,000₫</p>
                            </div>

                        </div>
                        <div className="product-card p-4">
                            <a className="name" href="">
                                <img src="image 5.png" alt="Sản phẩm 1"
                                    className="product-image w-full h-[421px] transition-transform transform duration-300 ease-in-out"/>
                                <h3 className="text-lg font-semibold mt-2">Quần short thun cột dây</h3>
                            </a>
                            <div className="grid grid-cols-2 -space-x-24 pt-3">
                                <p className="text-gray-500">19,99₫</p>
                                <p className="text-red-500">395,000₫</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <img className="w-full pt-8" src="image 6.png" alt=""/>
                </div>
                <div>
                    <h2 className="font-bold text-center text-[27px] pt-8 pb-8">MARC SIGNATURE</h2>
                    <div className="container mx-auto mt-5">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="product-card p-4">
                                <a className="name" href="">
                                    <img src="image 2.png" alt="Sản phẩm 1"
                                        className="product-image w-full h-[421px] transition-transform transform duration-300 ease-in-out"/>
                                    <h3 className="text-lg font-semibold mt-2">Đầm midi 2 dây smocking lưng</h3>
                                </a>
                                <div className="grid grid-cols-2 -space-x-24 pt-3">
                                    <p className="text-gray-500">19,99₫</p>
                                    <p className="text-red-500">395,000₫</p>
                                </div>
                            </div>
                            <div className="product-card p-4">
                                <a className="name" href="name">
                                    <img src="image 3.png" alt="Sản phẩm 1"
                                        className="product-image w-full h-[421px] transition-transform transform duration-300 ease-in-out"/>
                                    <h3 className="text-lg font-semibold mt-2">Đầm mini thêu cotton cổ tim tay..</h3>
                                </a>
                                <div className="grid grid-cols-2 -space-x-24 pt-3">
                                    <p className="text-gray-500">19,99₫</p>
                                    <p className="text-red-500">395,000₫</p>
                                </div>

                            </div>
                            <div className="product-card p-4">
                                <a className="name" href="">
                                    <img src="image 4.png" alt="Sản phẩm 1"
                                        className="product-image w-full h-[421px] transition-transform transform duration-300 ease-in-out"/>
                                    <h3 className="text-lg font-semibold mt-2">Quần Jogger</h3>
                                </a>
                                <div className="grid grid-cols-2 -space-x-24 pt-3">
                                    <p className="text-gray-500">19,99₫</p>
                                    <p className="text-red-500">395,000₫</p>
                                </div>

                            </div>
                            <div className="product-card p-4">
                                <a className="name" href="">
                                    <img src="image 5.png" alt="Sản phẩm 1"
                                        className="product-image w-full h-[421px] transition-transform transform duration-300 ease-in-out"/>
                                    <h3 className="text-lg font-semibold mt-2">Quần short thun cột dây</h3>
                                </a>
                                <div className="grid grid-cols-2 -space-x-24 pt-3">
                                    <p className="text-gray-500">19,99₫</p>
                                    <p className="text-red-500">395,000₫</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="w-full pt-8" src="image 9.png" alt=""/>
                </div>
                <div>
                    <h2 className="font-bold text-center text-[27px] pt-8 pb-8">BEST SELLER</h2>
                    <div className="container mx-auto mt-5">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="product-card p-4">
                                <a className="name" href="">
                                    <img src="image 2.png" alt="Sản phẩm 1"
                                        className="product-image w-full h-[421px] transition-transform transform duration-300 ease-in-out"/>
                                    <h3 className="text-lg font-semibold mt-2">Đầm midi 2 dây smocking lưng</h3>
                                </a>
                                <div className="grid grid-cols-2 -space-x-24 pt-3">
                                    <p className="text-gray-500">19,99₫</p>
                                    <p className="text-red-500">395,000₫</p>
                                </div>
                            </div>
                            <div className="product-card p-4">
                                <a className="name" href="name">
                                    <img src="image 3.png" alt="Sản phẩm 1"
                                        className="product-image w-full h-[421px] transition-transform transform duration-300 ease-in-out"/>
                                    <h3 className="text-lg font-semibold mt-2">Đầm mini thêu cotton cổ tim tay..</h3>
                                </a>
                                <div className="grid grid-cols-2 -space-x-24 pt-3">
                                    <p className="text-gray-500">19,99₫</p>
                                    <p className="text-red-500">395,000₫</p>
                                </div>

                            </div>
                            <div className="product-card p-4">
                                <a className="name" href="">
                                    <img src="image 4.png" alt="Sản phẩm 1"
                                        className="product-image w-full h-[421px] transition-transform transform duration-300 ease-in-out"/>
                                    <h3 className="text-lg font-semibold mt-2">Quần Jogger</h3>
                                </a>
                                <div className="grid grid-cols-2 -space-x-24 pt-3">
                                    <p className="text-gray-500">19,99₫</p>
                                    <p className="text-red-500">395,000₫</p>
                                </div>

                            </div>
                            <div className="product-card p-4">
                                <a className="name" href="">
                                    <img src="image 5.png" alt="Sản phẩm 1"
                                        className="product-image w-full h-[421px] transition-transform transform duration-300 ease-in-out"/>
                                    <h3 className="text-lg font-semibold mt-2">Quần short thun cột dây</h3>
                                </a>
                                <div className="grid grid-cols-2 -space-x-24 pt-3">
                                    <p className="text-gray-500">19,99₫</p>
                                    <p className="text-red-500">395,000₫</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="w-full pt-8" src="image 8.png" alt=""/>
                </div>
            </div>
        </section>
    </div>
    )
}

export default HomePage