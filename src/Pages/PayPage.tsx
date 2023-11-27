// import {BsFillPersonFill,BsFillCartFill} from 'react-icons/bs';
import { Link } from "react-router-dom";
import CartPay from "../components/cartPay";
import { useShoppingContext } from "../context/ShoppingCartContext"
import CartPage from "./CartPage";
const PayPage = () => {
  const { cartItem, totalPrice } = useShoppingContext();
  console.log(cartItem);

  return (
    <div>
      {/* <div>
            <ul className="flex">
              <li>
                <li>Trang chủ</li>
              </li>
              / <li> Giỏ hàng</li>
            </ul>
          </div> */}
      <section className="flex gap-8 w-10/12 m-auto py-10">
        <section className="basis-3/6">
          <form acceptCharset="UTF-8" action="/account" id="create_customer" method="post">
            <input name="form_type" type="hidden" value="create_customer" />
            <input name="utf8" type="hidden" value="✓" />

            <label htmlFor="Name">Họ và tên</label>
            <input type="text" name="name" id="Name" className="input-full" placeholder="Họ" />

            <label htmlFor="Email">Email</label>
            <input type="email" name="email" id="Email" className="input-full" placeholder="Email" />

            <label htmlFor="Phone">Số điện thoại</label>
            <input type="text" name="phone" id="Phone" className="input-full" placeholder="Số điện thoại" />

            <label htmlFor="Address">Địa chỉ</label>
            <input type="text" name="address" id="Address" className="input-full" placeholder="Địa chỉ" />
            <div className="flex gap-[10px] mt-[10px] pb-10" >
              <div className=" px-5px border-2 ">
                <select id="Conscious" name="Conscious" >
                  <option value="">Chọn thành phố</option>
                  <option value="Hanoi">Hà Nội</option>
                  <option value="NinhBinh">Ninh Bình</option>
                  <option value="Haiphong">Hải Phòng</option>
                  <option value="TPHCM">Thành phố Hồ Chí Minh</option>
                </select>

              </div>
              <div className="px-5px border-2 ">
                <select id="district" name="district" >
                  <option value="">Chọn Quận/Huyện</option>
                </select>

              </div>
              <div className="px-5 border-2 ">
                <select id="ward" name="ward" >
                  <option value="">Chọn Xã/Phường</option>
                </select>

              </div>

            </div>
            <div className="border-t-2 flex justify-between">
              <Link to={'/cart'}>
                <button className="border-2  font-semibold p-3 px-5 mt-10">
                  Giỏ hàng
                </button>{" "}
              </Link>

              <button className="bg-black text-white font-semibold p-3 px-7 mt-10 ">
                Phương thức thanh toán{" "}
              </button>
            </div>

          </form>

        </section>
        <section className="basis-3/6 w-full">
          {cartItem.map(item => {
            return <CartPay key={item._id} {...item} />
          })}
          <section className="bg-zinc-100 mt-12">
            <div className="p-5">
              {" "}
              <p>Tổng giỏ hàng</p>
              <div className=" pt-5 flex">
                {" "}
                <span className="grow">Tổng tiền</span>
                <span className="text-right ">{totalPrice} vnd</span>
              </div>
              <div className=" pt-5 flex">
                {" "}
                <span className="grow">Phí ship</span>
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
            </div>
          </section>

        </section>
      </section>
    </div>
  )
}

export default PayPage