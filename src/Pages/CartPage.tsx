import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useShoppingContext } from "../context/ShoppingCartContext";
import React, { useEffect, useState } from "react";
import { IVouchers } from "../interfaces/vouchers";
import { getVoucher } from "../api/vouchers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CartPage = () => {
  const { totalPrice, cartQty, cartItem } = useShoppingContext();
  console.log(totalPrice, "djdjd");
  const [voucherCode, setVoucherCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [vouchers, setVouchers] = useState<IVouchers[]>([]);

  console.log(vouchers, "aaaa");
  const handleApplyVoucher = () => {
    // Tìm voucher trong danh sách dựa trên mã
    console.log(vouchers, "tung");
    const voucher = vouchers.data.vouchers.find(
      (voucher) => voucher.Voucher_Code === voucherCode
    );
    // Nếu voucher tồn tại, áp dụng giảm giá và tính toán giá mới
    if (voucher) {
      const { Discount_Type, Expiration_Date } = voucher;
      const expiryDate = new Date(Expiration_Date);
      if (expiryDate > new Date()) {
        setDiscountPercentage(Discount_Type);
        localStorage.setItem("Discount_Type", Discount_Type);
      } else {
        console.log(
          `Mã giảm giá ${voucherCode} không hợp lệ do đã hết hạn sử dụng!`
        );
        toast.error("Mã giảm giá của bạn không hợp lệ hoặc đã hết hạn", {
          autoClose: 2000,
        });
        localStorage.removeItem("Discount_Type");
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      }
    } else {
      toast.error("Mã giảm giá của bạn không hợp lệ hoặc đã hết hạn", {
        autoClose: 2000,
      });
      localStorage.removeItem("Discount_Type");
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
  };
  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const vouchersData = await getVoucher();
        console.log(vouchersData, "3131");
        setVouchers(vouchersData);
      } catch (error) {
        console.error("Error fetching vouchers:", error);
      }
    };

    fetchVouchers();
  }, []);

  if (cartItem.length === 0) {
    return (
      <h2 className=" text-center py-[150px] font-bold text-[30px]">
        Không có sản phẩm nào
      </h2>
    );
  } else {
    return (
      <div>
        <div>
          <ul className="flex"></ul>
        </div>
        <section className="flex gap-8 w-10/12 m-auto py-20 ">
          <section className="basis-4/6">
            {cartItem.map((item) => {
              console.log("item", item);
              return <CartItem key={item._id} {...item} />;
            })}

            <div className="border-t-2 flex justify-between">
              <Link to={"/product"}>
                <button className="border-2  font-semibold p-3 px-5 mt-10">
                  Tiếp tục mua sắm
                </button>{" "}
              </Link>

              <button className="bg-black text-white font-semibold p-3 px-7 mt-10 ">
                Cập nhật giỏ hàng{" "}
              </button>
            </div>
          </section>
          <section className="basis-2/6 w-full">
            <p className="font-semibold">Mã giảm giá</p>
            <div className=" w-full">
              <input
                className="border w-8/12 py-3 px-2 mt-10"
                type="text"
                placeholder="Mã giảm giá"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
              />
              <button
                className="border w-3/12 py-3 px-2 mt-10 bg-black text-white"
                onClick={handleApplyVoucher}
              >
                Áp dụng
              </button>
            </div>
            <section className="bg-zinc-100 mt-12">
              <div className="p-10">
                {" "}
                <div className=" pt-5 flex">
                  {" "}
                  <span className="grow">Tổng giỏ hàng</span>
                  <span className="text-right ">{cartQty}</span>
                </div>
                <div className=" pt-5 flex">
                  {" "}
                  <span className="grow">voucher</span>
                  <span className="text-right">
                    giảm giá {discountPercentage}%
                  </span>
                </div>
                <div className=" pt-5 flex">
                  {" "}
                  <span className="grow">Tổng tiền</span>
                  <span className="text-right ">{totalPrice} vnd</span>
                </div>
                <div className="pt-5 flex">
                  <span className="grow">Tổng giảm giá</span>
                  <span className="text-right">
                    {(totalPrice * discountPercentage) / 100} vnd
                  </span>
                </div>
                <div className="pt-5 flex">
                  <span className="grow">Tổng tiền sau giảm giá</span>
                  <span className="text-right">
                    {totalPrice - (totalPrice * discountPercentage) / 100} vnd
                  </span>
                </div>
                <Link to={"/pay"}>
                  <button className="bg-black text-white font-semibold p-3 mt-10 w-full">
                    Thanh toán
                  </button>
                </Link>
              </div>
            </section>
          </section>
        </section>
      </div>
    );
  }
};

export default CartPage;
