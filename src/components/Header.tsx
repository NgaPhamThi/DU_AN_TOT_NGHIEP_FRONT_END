const Header = ()=>{
    return (
        <div>
             <div className="text-center bg-black text-white">
            <p className="text-[12px] pt-1 pb-1">Miễn Phí Đổi Hàng 30 Ngày</p>
        </div>
        <section className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-center">
                <div className="logo">
                    <a href=""> <img src="image-removebg-preview 1.png" alt=""/></a>
                </div>
                <div className="menu">
                    <ul className="flex gap-7 text-[18px] decoration-solid">
                        <li className="hover: transform hover:scale-110 transition-transform"><a className="font-serif hover:text-blue-500"  href="">Trang Chủ</a></li>
                        <li className="hover: transform hover:scale-110 transition-transform"><a className="font-serif hover:text-blue-500" href="">Sản Phẩm</a></li>
                        <li className="hover: transform hover:scale-110 transition-transform"><a className="font-serif hover:text-blue-500" href="">LookBook</a></li>
                        <li className="hover: transform hover:scale-110 transition-transform"><a className="font-serif hover:text-blue-500" href="">Dịp/Sự Kiện</a></li>
                        <li className="hover: transform hover:scale-110 transition-transform"><a className="font-serif hover:text-blue-500" href="">Blog</a></li>
                        <li className="hover: transform hover:scale-110 transition-transform"><a className="font-serif hover:text-blue-500" href="">Cửa hàng</a></li>
                       
                    </ul>
                </div>
                <div className="flex gap-5">
                    <a href=""><img src="Favorite_light.png" alt=""/></a>
                    <a href="/cart"><img src="Box_alt_light.png" alt=""/></a>
                    <a href=""><img src="User_cicrle_light.png" alt=""/></a>
                    <a href=""><img src="Search_light.png" alt=""/></a>
                </div>
            </div>
            <div className="banner pt-8 ">
                <img className="w-full" src="image 1.png" alt=""/>
            </div>
        </section>
        </div>
    )
}
export default Header