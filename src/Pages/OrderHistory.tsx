import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CartItem } from '../context/ShoppingCartContext'
import { IOrders } from '../interfaces/Orders'
import axios from 'axios'
import { getAllOrderDetail } from '../api/orders'
import { jwtDecode } from 'jwt-decode'
import { toast } from 'react-toastify'


interface TokenPayload {
  id: string
  // Bạn cần thêm các trường khác từ payload token nếu cần
}
const statusOptions = [
  { value: 'PENDING', label: 'chờ duyệt' },
  { value: 'PROCESSING', label: 'lấy hàng' },
  { value: 'ONDELIVERY', label: 'đang giao' },
  { value: 'COMPLETED', label: 'giao hàng thành công' },
  { value: 'CANCELLED', label: 'Hủy đơn hàng' }
]
const OrderHistory = () => {
  const [OderDetail, setOderDetail] = useState<IOrders[]>([])
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  //them
  const username = localStorage.getItem('username')
  const getStatusLabel = (status: string) => {
    const statusOption = statusOptions.find((option) => option.value === status)
    return statusOption ? statusOption.label : status
  }
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const  voucherId = localStorage.getItem("id");
  useEffect(() => {
    if (!searchParams.get('encode') && !searchParams.get('userId')) {
      navigate('/purchase')
    }
    const date = new Date()
    if (searchParams.get('expire')) {
      if (Number(searchParams.get('expire')) < date.getTime()) {
        navigate('/')
      } else {
        if (Number(searchParams.get('vnp_ResponseCode')) != 24 && cartItems && cartItems.length > 0) {
          const orderVnpay = {
            userId:
              (searchParams.get('userId') as string) === 'undefined'
                ? undefined
                : (searchParams.get('userId') as string),

            fullname: searchParams.get('fullname'),
            phonenumber: searchParams.get('phone'),
            email: searchParams.get('email'),
            address: searchParams.get('address'),
            orderTotal: searchParams.get('total'),
            orderDetails: cartItems?.map((item) => ({
              productId: item._id,
              quantity: item.quantity,
              price: item.price,
              voucherId: voucherId,
              sizeId: item.sizeId,
              colorId: item.colorId
            }))
          }

          axios
            .post('http://localhost:8080/api/order', orderVnpay)
            .then(() => {
              toast.success('Đặt hàng thành công')
            })
            .catch((error) => {
              return toast.error('Xin lỗi đã có vấn đề về đặt hàng của bạn' + error)
            })
          localStorage.removeItem('Discount_Type')
          localStorage.removeItem('shopping_cart')
        }
      }
    }
  }, [cartItems, navigate, searchParams])
  //    const getUserIdFromToken = (): string | null => {
  const getUserIdFromToken = (): string | null => {
    const token = localStorage.getItem('token')
    if (!token) {
      console.log('Token not found in localStorage.')
      return null
    }

    try {
      const decoded = jwtDecode<TokenPayload>(token)
      console.log(decoded) // Kiểm tra xem decoded token có đúng không
      return decoded.id
    } catch (error) {
      console.error('Error decoding token:', error)
      return null
    }
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const formatDate = (date: Date | string) => {
    const formattedDate = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('vi-VN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(formattedDate);
  };
  useEffect(() => {
    const storedCart: string | null = localStorage.getItem('shopping_cart')
    if (storedCart !== null) {
      const parsedCart: CartItem[] = JSON.parse(storedCart)
      setCartItems(parsedCart)
    }
    const fetchAllOrders = async () => {
      try {
        const id = getUserIdFromToken()
        if (id) {
          const res = await getAllOrderDetail(id)
          const sortedOrders = res.data.sort((a:any, b:any) => {
            return new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime();
          });
          setOderDetail(sortedOrders)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllOrders()
    
  }, [])

 

  
  return (
    <div className="bg-gray-100 font-sans">

    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
  
    
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Đơn Hàng Đã Mua</h1>
        <p className="text-gray-600 text-2xl pt-6" >Xin Chào {username}</p>
      </header>
  
   
      <section>
        <ul className="divide-y divide-gray-300">
         {OderDetail.map((item)=>(
           <li className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Mã Đơn : {item._id}</h2>
                <p className="text-gray-600">Ngày Đặt: {formatDate(String(item.orderDate))}</p>
                <p className="text-gray-600">Nguời Đặt: {item.fullname}</p>
                <p className="text-gray-600">Điện Thoại: {item.phonenumber}</p>
                <p className="text-gray-600">Email: {item.email}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-gray-600 mb-2 font-medium">Trạng Thái: <span className='font-normal'>{item.status !== undefined && getStatusLabel(item.status)}</span></span>
              <span className="block text-green-500 font-bold text-xl">{item.orderTotal.toLocaleString()}đ</span>
              <Link to={`order/${item._id}`}>
              <p  className="text-blue-500 mt-2">Chi Tiết</p>
              </Link>
             
            </div>
          </li>
         ))}
         
  
          
          
        </ul>
      </section>
  
    </div>
  
  </div>
  )
}

export default OrderHistory
