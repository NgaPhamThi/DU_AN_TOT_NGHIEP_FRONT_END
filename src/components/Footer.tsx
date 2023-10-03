const Footer = () =>{
    return (
        <section>
            <div className="bg-black mx-auto text-center mt-8 pb-8">
                <p className="font-bold text-center text-[30px] pt-4 text-white ">ĐĂNG KÍ NHẬN KHUYẾN MÃI</p>
                <p className="text-center text-[14px] pt-2 text-white font-mono">Hãy nhập email của bạn vào đây để nhận được xu hướng
                    thời trang và khuyến mãi mới nhất từ TND nhé.</p>
                <div className="pt-7 relative">
                    <input className="w-[512px] outline-none h-[52px] pl-4 rounded-full" type="text"
                        placeholder="Nhập email của bạn"/>
                    <button className="absolute -ml-14 ">
                        <a href=""> <img className="" src="Send_hor_fill.svg" alt=""/></a>
                    </button>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto pb-7">
                <div>
                    <a href=""><img src="image-removebg-preview 1.png" alt=""/></a>
                </div>
                <div className="flex justify-between">
                    <div className="w-[500px]">
                        <div className="flex items-center">
                            <div className="pr-24">
                                <a href=""><img src="image 10.png" alt=""/></a>
                            </div>
                            <ul className="flex justify-between gap-5">
                                <li><a href=""><img src="facebook.svg" alt=""/></a></li>
                                <li><a href=""><img src="instagram.svg" alt=""/></a></li>
                                <li><a href=""><img src="tiktok.svg" alt=""/></a></li>
                                <li><a href=""><img src="telegram.svg" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="pt-4">
                            <p>
                                Thương hiệu thời trang TND - CÔNG TY CỔ PHẦN SẢN XUẤT THƯƠNG MẠI NÉT VIỆT
                            </p>
                            <p className="pt-2">
                                Địa chỉ: 96 - 98 Đường số 20, Khu Đô Thị Mới Him Lam, Phường Tân Hưng, Quận 7, Tp. HCM
                            </p>
                        </div>
                        <div className="pt-9">
                            <ul>
                                <li className="hover:text-red-500"><a href="">Chính sách bảo mật</a></li>
                                <li className="hover:text-red-500"><a href="">Các điều khoản và điều kiện</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[22px] font-medium">Về chúng tôi</h3>
                        <div className="text-[15px] pt-3">
                            <ul>
                                <li className="hover:text-red-200"><a href="">Giới thiệu TND</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Tuyển dụng</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Cảm hứng thời trang</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Danh sách cửa hàng</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Nhượng quyền thương hiệu</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Khách hàng thân thiết</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Chính sách giao hàng</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Chính sách bảo hành</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[22px] font-medium">Hỗ trợ khách hàng</h3>
                        <div className="text-[15px] pt-3">
                            <ul>
                                <li className="hover:text-red-200 "><a href="">Liên hệ đến TND</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Câu hỏi thường gặp</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Hướng dẫn tạo tài khoản</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Hướng dẫn đặt hàng</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Mua Online nhận tại cửa hàng</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Hướng dẫn mua trước trả sau</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Quy định và hướng dẫn đổi/trả hàng</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Hướng dẫn đánh giá sản phẩm</a></li>
                                <li className="hover:text-red-200 pt-2"><a href="">Hướng dẫn xem và đổi thưởng</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[22px] font-medium">Liên lạc</h3>
                        <div className="text-[15px] pt-3">
                            <p>Đặt hàng trực tuyến (8h-21h)</p>
                            <a className="text-[#0000ff] font-bold" href="">1900 636942</a>
                            <p className="pt-5">Chăm sóc khách hàng</p>
                            <a className="text-[#0000ff] font-bold" href="">1900 636940</a>
                        </div>
                        <div className="text-[15px] pt-7">
                            <a className="text-[#0097ba]" href=""><span>tndtndsalesonline@gmail.com</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer