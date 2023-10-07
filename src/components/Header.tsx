import React from 'react'

const Header = () => {
    return (
        <div>
            <header>
                <div className="Header_top bg-black text-center h-[30px]">
                    <span className=' text-white text-[12px]'>Miễn Phí Đổi Hàng 30 Ngày</span>
                </div>
                <div className="Header_main flex justify-between mx-[50px]  py-[20px]">
                    <div className="logo cursor-pointer">
                        <img className='w-[100px] h-[50px]' src="https://theme.hstatic.net/1000197303/1001046599/14/logo.png?v=6700" alt="" />
                    </div>
                    <div className="menu">
                        <ul className='flex justify-around gap-[50px]'>
                            <li><a className='np-top-menu-item' href="">Trang Chủ</a></li>
                            <li><a className='np-top-menu-item' href="">Sản Phẩm</a></li>
                            <li><a className='np-top-menu-item' href="">LookBook</a></li>
                            <li><a className='np-top-menu-item' href="">Dịp/Sự Kiện</a></li>
                            <li><a className='np-top-menu-item' href="">Blog</a></li>
                            <li><a className='np-top-menu-item' href="">Cửa hàng</a></li>

                        </ul>
                    </div>
                    <div className="menu_cart flex gap-[20px]">
                        <div className="icon_like"><a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </a></div>
                        <div className="icon_cart">
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </a>
                        </div>
                        <div className="icon_user">
                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            </a>
                        </div>
                        <div className="icon_search">
                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header