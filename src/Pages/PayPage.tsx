import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartItem } from "../context/ShoppingCartContext";
import { IColor } from "../interfaces/color";
import { ISize } from "../interfaces/size";
interface TokenPayload {
  id: string;
  // Bạn cần thêm các trường khác từ payload token nếu cần
}
const PayPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [sizes, setSizes] = useState<ISize[]>([]); // Add your size data
  const [colors, setColors] = useState<IColor[]>([]);
  const [discount, setDiscount] = useState(0);
  
  
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<string>("cashOnDelivery");
  const [formData, setFormData] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    address: "",
  });
  useEffect(() => {
    // Fetch cart information from local storage
    const storedCart: string | null = localStorage.getItem("shopping_cart");
    if (storedCart !== null) {
      const parsedCart: CartItem[] = JSON.parse(storedCart);
      setCartItems(parsedCart);
    }
    axios
      .get<ISize[]>("http://localhost:8080/api/size")
      .then((response) => setSizes(response.data))
      .catch((error) => console.error("Error fetching size data:", error));

    // Fetch color data from your API
    axios
      .get<IColor[]>("http://localhost:8080/api/color")
      .then((response) => setColors(response.data))
      .catch((error) => console.error("Error fetching color data:", error));
    console.log(storedCart);
    const storedDiscount: string | null = localStorage.getItem("Discount_Type");
    if (storedDiscount !== null) {
      const discountValue: number = parseFloat(storedDiscount);
      setDiscount(discountValue);
    }
  }, []);
  const  voucherId = localStorage.getItem("id");
    console.log("voucher:",voucherId);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingFee = 100;
  const getSizeNameById = (sizeId: string) => {
    const size = sizes.find((s) => s._id === sizeId);
    return size ? size.name : "Unknown Size";
  };
  const getColorNameById = (colorId: string) => {
    const color = colors.find((c) => c._id === colorId);
    return color ? color.name : "Unknown Color";
  };

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Token not found in localStorage.");
      return null;
    }

    try {
      const decoded = jwtDecode<TokenPayload>(token);
      console.log(decoded); // Kiểm tra xem decoded token có đúng không
      return decoded.id;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };
  


 
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userId = getUserIdFromToken() || ""
      if (!userId) {
        toast.success("Đặt hàng thành công", { autoClose: 2000 });
        // Nếu userId không tồn tại, hiển thị thông báo lỗi và không thực hiện navigate
        setTimeout(() => {
          navigate("/");
        }, 3000);
        return;
      }
      const dataForm = {
       userId: userId,
        fullname: formData.fullname,
        phonenumber: formData.phonenumber,
        email: formData.email,
        address: formData.address,
        orderTotal: totalPrice -shippingFee - (totalPrice * discount) / 100,
        orderDetails: cartItems.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
          price: item.price,
          voucherId: voucherId,  
          sizeId: item.sizeId,
          colorId: item.colorId,
        })),
        
      };
      if(paymentMethod === "cashOnDelivery"){
        const createOrder = await axios.post(
          "http://localhost:8080/api/order",
          dataForm
        )
        console.log(createOrder);
        setTimeout(() => {
        navigate("/purchase");
      }, 3000);
      toast.success("Đặt hàng thành công", { autoClose: 2000 });
        
      }else if (paymentMethod === "vnpay"){
        const vnPay = await axios.post(
          "http://localhost:8080/api/createVnpay",
          dataForm
        );
        if (vnPay.data) {
          window.location.href = vnPay.data;
        }
      }
      

      // Send order data to your server
      // const response = await axios.post("http://localhost:8080/api/order", );
      // localStorage.removeItem("Discount_Type");

      

      // console.log("Order created:", response.data);
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Hãy điền đầy đủ thông tin", { autoClose: 2000 });
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <section className="flex gap-8 w-10/12 m-auto py-10">
        <ToastContainer />
        <section className="basis-3/6">
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="fullname">Họ và tên</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="input-full"
              placeholder="Họ Tên"
              value={formData.fullname}
              onChange={(e) =>
                setFormData({ ...formData, fullname: e.target.value })
              }
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className="input-full"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <label htmlFor="phonenumber">Số điện thoại</label>
            <input
              type="text"
              name="phonenumber"
              id="phonenumber"
              className="input-full"
              placeholder="Số điện thoại"
              value={formData.phonenumber}
              onChange={(e) =>
                setFormData({ ...formData, phonenumber: e.target.value })
              }
            />

            <label htmlFor="Address">Địa chỉ</label>
            <input
              type="text"
              name="address"
              id="Address"
              className="input-full"
              placeholder="Địa chỉ"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          <div className="pt-5">
              <p>Hình thức thanh toán</p>
              <div>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={paymentMethod === "cashOnDelivery"}
                    onChange={() => setPaymentMethod("cashOnDelivery")}
                  />
                  Thanh toán khi nhận hàng
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="vnpay"
                    checked={paymentMethod === "vnpay"}
                    onChange={() => setPaymentMethod("vnpay")}
                  />
                  Thanh toán bằng VNPAY
                </label>
              </div>
            </div>
            
           
            <div className="border-t-2 flex justify-between">
              <button
                onClick={() => navigate("/cart")}
                type="button"
                className="border-2  font-semibold p-3 px-5 mt-10"
              >
                Giỏ hàng
              </button>
              <button
                type="submit"
                className="bg-black text-white font-semibold p-3 px-7 mt-10 "
              >
                Đặt Hàng
              </button>
            </div>
          </form>
        </section>
        <section className="basis-3/6 w-full">
          <table className="table-auto w-full ">
            <tbody className="w-full ">
              {cartItems.map((item) => (
                <tr key={item._id} className="border-t-2">
                  <td className="flex py-10  gap-8">
                    <img src={item.img} className="w-20"></img>

                    <div className="pt-7">
                      <p>{item.name}</p>
                      <div>
                        <p>{`Size: ${item.sizeId !== null
                            ? getSizeNameById(String(item.sizeId))
                            : "N/A"
                          }`}</p>
                        <p>{`Color: ${item.colorId !== null
                            ? getColorNameById(String(item.colorId))
                            : "N/A"
                          }`}</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-40"> {item.price * item.quantity} </td>
                </tr>
              ))}
            </tbody>
          </table>
          <section className="bg-zinc-100 mt-12">
            <div className="p-5">
              {" "}
              <p>Tổng giỏ hàng</p>
              <div className=" pt-5 flex">
                <span className="grow">Voucher</span>
                <span className="text-right ">{`giảm giá ${discount}%`}</span>
              </div>
              <div className=" pt-5 flex">
                {" "}
                <span className="grow">Tổng tiền</span>
                <span className="text-right ">
                  {`${totalPrice.toLocaleString()}`} vnd
                </span>
              </div>
              <div className=" pt-5 flex">
                {" "}
                <span className="grow">Tổng giảm giá</span>
                <span className="text-right ">
                  {`${(totalPrice * discount) / 100}`} vnd
                </span>
              </div>
              <div className=" pt-5 flex">
                {" "}
                <span className="grow">Tổng tiền sau giảm giá</span>
                <span className="text-right ">
                  {`${totalPrice - (totalPrice * discount) / 100}`} vnd
                </span>
              </div>
              <div className=" pt-5 flex">
                {" "}
                <span className="grow">Phí ship</span>
                <span className="text-right ">
                  {`${shippingFee.toLocaleString()}`} vnd
                </span>
              </div>
              <div className=" pt-5 flex">
                {" "}
                <span className="grow">Thanh toán</span>
                <span className="text-right ">
                  {`${totalPrice - (totalPrice * discount) / 100 - shippingFee
                    }`}{" "}
                  vnd
                </span>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default PayPage;
