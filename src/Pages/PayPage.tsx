import {BsFillPersonFill,BsFillCartFill} from 'react-icons/bs';
const PayPage =() =>{
    return (
        <div>
          <div>
            <ul className="flex">
              <li>
                <li>Trang chủ</li>
              </li>
              / <li> Giỏ hàng</li>
            </ul>
          </div>
            <section className="flex gap-4 w-10/12 m-auto py-5 bg-cyan-300">
              
                <table className="table-auto w-full ">
                  <thead className="pb-10 ">
                    <tr className="text-center ">
                      <th className="  pl-5">
                          <td className="flex  gap-8">
                          <div className="p-5"><BsFillPersonFill style={ {fontSize: '50px'}} /></div>
                            <div className="pt-5 text-left ">
                              <p className="font-semibold">KHÁCH HÀNG</p>
                              <div className=" pt-3 text-sm">
                                  <p>Phạm Ngọc Quang</p>
                                <p>quangpn1254@gmail.com</p>
                              </div>
                              
                            </div>
                          </td>
                      </th>

                      
                      <th className=" pl-5">
                          <td className="flex gap-8">
                          <div className="p-5"><BsFillCartFill  style={ {fontSize: '50px'}}/></div>
                              <div className="pt-5 text-left " >
                                <p className="font-semibold">Địa chỉ giao hàng</p>

                                <div className=" pt-3 text-sm">
                                  <p>Cầu Giấy-Hà Nội</p>
                                  <p>quangpn1254@gmail.com</p>
                                </div>
                              </div>

                            </td>
                      </th>
                    </tr>
                  </thead>
                </table>
             
            </section>


          <section className="flex gap-8 w-10/12 m-auto py-20">
            <section className="basis-4/6">
              <table className="table-auto w-full ">
                <thead className="pb-10 ">
                  <tr className="text-left ">
                    <th className=" font-semibold pb-10">Sản phẩm</th>
                    <th className="font-semibold pb-10">Số lượng</th>
                    <th className="font-semibold pb-10">Tổng tiền</th>
                  </tr>
                </thead>
                <tbody className="w-full ">
                  <tr className="border-t-2">
                    <td className="flex py-10  gap-8">
                      <img src="image 3.png" className="w-20"></img>
                      <div className="pt-7">
                        <p>Sản phẩm 1</p>
                      </div>
                    </td>
                    <td className="w-40 ">
                    
                      <span className="px-6">5</span>
                    
                    </td>
                    <td className="w-40"> 500.000 VNĐ </td>
                    <td>
                      <button>
                        <i className="fa-sharp fa-solid fa-circle-xmark text-slate-300 bg-black rounded-full shadow-md shadow-black text-3xl"></i>
                      </button>
                    </td>
                  </tr>

                  
                </tbody>
              </table>
              <div className="border-t-2 flex justify-between">
                <button className="border-2  font-semibold p-3 px-5 mt-10">
                  Tiếp tục mua sắm
                </button>{" "}
                <button className="bg-black text-white font-semibold p-3 px-7 mt-10 ">
                  Cập nhật thông tin giao hàng{" "}
                </button>
              </div>
            </section>
            <section className="basis-2/6 w-full">
              <p className="font-semibold">Mã giảm giá</p>
              <div className=" w-full">
                <input
                  className="border w-8/12 py-3 px-2  mt-10"
                  type="text"
                  placeholder="Mã giảm giá"
                />
                <button className="border w-3/12 py-3 px-2 mt-10 bg-black text-white">
                  Áp dụng
                </button>
              </div>
              <section className="bg-zinc-100 mt-12">
                <div className="p-10">
                  {" "}
                  <p>Tổng giỏ hàng</p>
                  <div className=" pt-5 flex">
                    {" "}
                    <span className="grow">Tổng tiền</span>
                    <span className="text-right ">500.000 vnd</span>
                  </div>
                  <div className=" pt-5 flex">
                    {" "}
                    <span className="grow">Phí ship</span>
                    <span className="text-right ">0 vnd</span>
                  </div>
                  <div className=" pt-5 flex">
                    {" "}
                    <span className="grow">Thuế</span>
                    <span className="text-right ">0 vnd</span>
                  </div>
                  <div className=" pt-5 flex">
                    {" "}
                    <span className="grow">Giảm giá</span>
                    <span className="text-right ">100.000 vnd</span>
                  </div>
                  <div className=" pt-5 flex">
                    {" "}
                    <span className="grow">Thanh toán</span>
                    <span className="text-right ">400.000 vnd</span>
                  </div>
                  <button className="bg-black text-white font-semibold p-3 mt-10 w-full">
                    Thanh toán
                  </button>
                </div>
              </section>
            </section>
          </section>
        </div>
    )
}

export default PayPage