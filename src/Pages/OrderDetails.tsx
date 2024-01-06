import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getByIdOrderDetail, updateStatusOrder } from '../api/orders'
import { IOrderDetail } from '../interfaces/orderDetail'
import { IOrders } from '../interfaces/Orders'
import { IProduct } from '../interfaces/product'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getSize } from '../api/size'
import { getColor } from '../api/color'
import { getVoucher, getVoucherById } from '../api/vouchers'
type Props = {}
const statusOptions = [
    { value: 'PENDING', label: 'chờ duyệt' },
    { value: 'PROCESSING', label: 'lấy hàng' },
    { value: 'ONDELIVERY', label: 'đang giao' },
    { value: 'COMPLETED', label: 'giao hàng thành công' },
    { value: 'CANCELLED', label: 'Hủy đơn hàng' }
  ];
const OrderDetails = (props: Props) => {
    const { orderId } = useParams()
    const [orderDetails, setOrderDetails] = useState<IOrderDetail[]>([])
    const [orderInfo, setOrderInfo] = useState<IOrders | null>(null);
    const [subtotal, setSubtotal] = useState<number>(0);
    const [isCancelModalVisible, setCancelModalVisible] = useState(false);
    const [sizes, setSizes] = useState<any[]>([]); // Replace 'any[]' with the actual type of your size objects
    const [colors, setColors] = useState<any[]>([]);
    const [voucherName, setVoucherName] = useState<string | null>(null);
    //thay thế tiếng anh bằng tiếng việt
    const getStatusLabel = (status:any) => {
        const statusOption = statusOptions.find((option) => option.value === status);
        return statusOption ? statusOption.label : 'Không xác định';
      };
    const fetchOrderDetail = async () => {
        try {
            if (orderId) {
                const { data } = await getByIdOrderDetail(orderId)
                setOrderDetails(data.orderDetails)
                setOrderInfo(data)
                console.log(data);
                const total = data.orderDetails.reduce((acc: any, orderDetail: any) => {
                    const productTotal = orderDetail.productInfo.price * orderDetail.quantity;
                    return acc + productTotal;
                }, 0);
                setSubtotal(total);
            }
        } catch (error) {
            console.error('Error fetching order details:', error);
        }
    }
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [orderId])
    const CancelModal = () => (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 shadow-2xl">
        <h2 className="text-lg font-bold mb-2">Bạn chắc chắn muốn hủy đơn hàng?</h2>

        {/* <p className="text-sm text-gray-500 mb-4">
            Doing that could cause some issues elsewhere. Are you 100% sure it's OK?
        </p> */}

        <div className="flex justify-between gap-2">
            <button
            onClick={handleCancelYes}
                type="button"
                className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
            >
               Có
            </button>

            <button
                onClick={toggleCancelModal}
                type="button"
                className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
            >
                Không
            </button>
        </div>
    </div>
    );

    // Step 3: Toggle pop-up visibility
    const toggleCancelModal = () => {
        setCancelModalVisible(!isCancelModalVisible);
    };
    const handleCancelYes = async () => {
        try {
            const updatedOrderInfo: IOrders = {
                userId: orderInfo?.userId || '',
                fullname: orderInfo?.fullname || '',
                email: orderInfo?.email || '',
                phonenumber: orderInfo?.phonenumber || '',
                address: '', // Add the missing address property
                orderTotal: 0, // Add the missing orderTotal property
                orderDetails: [], // Add the missing orderDetails property
                status: 'CANCELLED',
            };
            // Make API call to update order status to 'cancelled'
            if (orderId) {
                await updateStatusOrder(orderId, updatedOrderInfo);
                await fetchOrderDetail();
            }
            toast.success('Hủy đơn hàng thành công', { autoClose: 2000 })
            setCancelModalVisible(false);
        } catch (error) {
            console.error('Error cancelling order:', error);
            toast.error('Không thể hủy đơn hàng ở trạng thái này', { autoClose: 2000 })
        }
    };

    useEffect(() => {
        fetchOrderDetail()
        fetchSizesAndColors()
    }, [])
    const fetchSizesAndColors = async () => {
        // Fetch sizes and setSizes
        // Replace 'fetchSizesFunction' with your actual function to fetch sizes
        const sizesData = await getSize();
        setSizes(sizesData.data);

        // Fetch colors and setColors
        // Replace 'fetchColorsFunction' with your actual function to fetch colors
        const colorsData = await getColor();
        setColors(colorsData.data);
    };
    const getSizeName = (sizeId: string) => {
        const size = sizes.find((s) => s._id === sizeId);
        return size ? size.name : sizeId;
    };

    const getColorName = (colorId: string) => {
        const color = colors.find((c) => c._id === colorId);
        return color ? color.name : colorId;
    };
    useEffect(() => {
        const fetchVoucherName = async () => {
          try {
            const voucherId = orderInfo?.orderDetails[0].voucherId || ''; // Lấy voucherId từ orderInfo
            const response = await getVoucherById(voucherId); // Gọi API để lấy thông tin voucher
            console.log(response.data);

            setVoucherName(response.data.Discount_Type); // Lưu tên voucher vào state
          } catch (error) {
            console.error('Error fetching voucher:', error);
          }
        };

        fetchVoucherName();
      }, [orderInfo]);
      const formattedCurrentDateTime = orderInfo ? new Date(orderInfo.orderDate).toLocaleDateString('vi-VN', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }):'';
    return (
        <div>
            <section className="flex items-center py-16 -mt-[79px]  md:py-20 font-poppins dark:bg-gray-800 ">
            <div className="justify-center flex-1 max-w-full px-4 py-4 mx-auto bg-white border rounded-md dark:border-gray-900 dark:bg-gray-900 md:py-10 md:px-10">
                <div>
                    
                    <div className="flex border-b border-gray-200 dark:border-gray-700  items-stretch justify-start w-full h-full px-4 mb-8 md:flex-row xl:flex-col md:space-x-6 lg:space-x-8 xl:space-x-0">
                        <div className="flex items-start justify-start flex-shrink-0">
                            <div className="flex items-center justify-center w-full pb-6 space-x-4 md:justify-start">
                                <img src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg" className="object-cover w-16 h-16 rounded-md" alt="avatar"/>
                                    <div className="flex flex-col items-start justify-start space-y-2">
                                        <p className="text-lg font-semibold leading-4 text-left text-gray-800 dark:text-gray-400">
                                        {orderInfo?.fullname}</p>
                                        <p className="text-sm leading-4 cursor-pointer dark:text-gray-400">{orderInfo?.email}</p>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center pb-4 mb-10 border-b border-gray-200 dark:border-gray-700">
                        <div className="w-full px-4 mb-4 md:w-1/4">
                            <p className="mb-2 text-sm leading-5 text-gray-600 dark:text-gray-400 ">
                                Số điện thoại: </p>
                            <p className="text-base font-semibold leading-4 text-gray-800 dark:text-gray-400">
                            {orderInfo?.phonenumber}</p>
                        </div>
                        <div className="w-full px-4 mb-4 md:w-1/4">
                            <p className="mb-2 text-sm leading-5 text-gray-600 dark:text-gray-400 ">
                                Ngày đặt: </p>
                            <p className="text-base font-semibold leading-4 text-gray-800 dark:text-gray-400">
                                {formattedCurrentDateTime}</p>
                        </div>
                        <div className="w-full px-4 mb-4 md:w-1/4">
                            <p className="mb-2 text-sm font-medium leading-5 text-gray-800 dark:text-gray-400 ">
                                Tổng: </p>
                            <p className="text-base font-semibold leading-4 text-blue-600 dark:text-gray-400">
                            {orderInfo?.orderTotal.toLocaleString()}</p>
                        </div>
                        <div className="w-full px-4 mb-4 md:w-1/4">
                            <p className="mb-2 text-sm leading-5 text-gray-600 dark:text-gray-400 ">
                                Địa chỉ : </p>
                            <p className="text-base font-semibold leading-4 text-gray-800 dark:text-gray-400 ">
                            {orderInfo?.address} </p>
                        </div>
                    </div>
                    {orderDetails.map((orderDetail)=>(
                        <div
                        className="flex flex-col items-start justify-start w-full mt-4 mb-4 border-b border-gray-200 dark:border-gray-700 md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8">
                        <div className="w-full pb-4 md:pb-6 md:w-40">
                            <img className="hidden w-full h-[150px] object-cover md:block"
                                src={orderDetail.productInfo.img[0]} alt="dress"/>
                                <img className="object-cover w-full  h-[450px] md:hidden"
                                    src="https://i.postimg.cc/wBrssYjn/pexels-timothy-paule-ii-2002717.jpg " alt="dress"/>
                                </div>
                                <div className="flex flex-col items-start justify-between w-full pb-6 space-y-2 md:flex-row md:space-y-0">
                                    <div className="flex flex-col items-start justify-start w-full space-y-4">
                                        <h2 className="text-xl font-semibold leading-6 text-gray-800 dark:text-gray-400 xl:text-2xl overflow-hidden overflow-ellipsis  whitespace-nowrap max-w-[500px]">
                                        {orderDetail.productInfo.name}</h2>
                                        <div className="flex flex-col items-start justify-start space-y-3">
                                            
                                            <p className="text-sm leading-none text-gray-800 dark:text-gray-400">
                                                <span className="text-gray-400 dark:text-gray-400">Size: </span> {orderDetail.sizeId !== null ? getSizeName(orderDetail.sizeId) : 'N/A'}
                                            </p>
                                            <p className="text-sm leading-none text-gray-800 dark:text-gray-400"><span
                                                className="text-gray-400 dark:text-gray-400">Color: </span>{getColorName(orderDetail.colorId)}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start justify-between w-full space-x-8">
                                        <p className="text-base leading-6 dark:text-gray-400 xl:text-lg">{orderDetail.productInfo.price.toLocaleString()}đ <span
                                            className="text-blue-300 line-through hidden"> $45.00</span></p>
                                        <p className="text-base leading-6 text-gray-800 dark:text-gray-400 xl:text-lg">{orderDetail.quantity}</p>
                                        <p className="text-base font-semibold leading-6 text-gray-800 dark:text-gray-400 xl:text-lg">
                                        {(orderDetail.productInfo.price * orderDetail.quantity).toLocaleString()}đ</p>
                                    </div>
                                </div>
                        </div>
                    ))}
                    


                    



                    <div className="px-4 mb-10">
                        <div className="flex flex-col items-stretch justify-center w-full space-y-4 md:flex-row md:space-y-0 md:space-x-8">
                            <div className="flex flex-col w-full space-y-6 ">
                                <h2 className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-400">Tổng</h2>
                                <div className="flex flex-col items-center justify-center w-full pb-4 space-y-4 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex justify-between w-full">
                                        <p className="text-base leading-4 text-gray-800 dark:text-gray-400">Tổng tiền hàng</p>
                                        <p className="text-base leading-4 text-gray-600 dark:text-gray-400">{subtotal.toLocaleString()}đ</p>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <p className="text-base leading-4 text-gray-800 dark:text-gray-400">Discount
                                        </p>
                                        <p className="text-base leading-4 text-gray-600 dark:text-gray-400">{voucherName ? parseFloat(voucherName).toLocaleString() + 'đ' : ''}</p>
                                    </div>
                 
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-base font-semibold leading-4 text-gray-800 dark:text-gray-400">Tổng tiền</p>
                                    <p className="text-base font-semibold leading-4 text-gray-600 dark:text-gray-400">{orderInfo?.orderTotal.toLocaleString()}đ</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-full px-2 space-y-4 md:px-8 ">
                                <h2 className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-400">Trạng thái</h2>
                                <div className="flex items-start justify-between w-full">
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-8 h-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400 bi bi-truck" viewBox="0 0 16 16">
                                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col items-center justify-start">
                                            <p className="text-lg font-semibold leading-6 text-gray-800 dark:text-gray-400">
                                            {getStatusLabel(orderInfo?.status)}<br/><span className="text-sm font-normal">Giao hàng trong 24 giờ</span>
                                            </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-wrap items-center justify-start gap-4 px-4 mt-6 ">
                        <a href="/">
                        <button className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-md md:w-auto hover:text-gray-100 hover:bg-blue-600 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-300">
                            Tiếp tục mua sắm
                        </button>
                        </a>
                        { orderInfo?.status === 'PENDING' ? 
                        <button className="w-full px-4 py-2 bg-blue-500 rounded-md text-gray-50 md:w-auto dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-gray-700 dark:bg-gray-800">
                            Hủy đơn hàng
                        </button> : <div></div>}
                    </div>
                </div>
            </div>
        </section>
        </div>
        
    )
}

export default OrderDetails