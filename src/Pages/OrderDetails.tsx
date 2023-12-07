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
type Props = {}

const OrderDetails = (props: Props) => {
    const { orderId } = useParams()
    const [orderDetails, setOrderDetails] = useState<IOrderDetail[]>([])
    const [orderInfo, setOrderInfo] = useState<IOrders | null>(null);
    const [subtotal, setSubtotal] = useState<number>(0);
    const [isCancelModalVisible, setCancelModalVisible] = useState(false);
    const [sizes, setSizes] = useState<any[]>([]); // Replace 'any[]' with the actual type of your size objects
    const [colors, setColors] = useState<any[]>([]);

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
                status: 'Hủy đơn hàng',
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
    return (

        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
             <ToastContainer />
            <div className="flex justify-start item-start space-y-2 flex-col">
                <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #13432</h1>
                <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-sm md:text-xl dark:text-white  leading-6 xl:leading-5 text-gray-800">MÃ ĐƠN HÀNG.{orderInfo?._id}</p>


                        {orderDetails.map((orderDetail) => (
                            <div key={orderDetail._id} className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                <div className="pb-4 md:pb-8 w-full md:w-40">
                                    <img className="w-full hidden md:block" src={orderDetail.productInfo.img} alt="dress" />
                                    <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                                </div>
                                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                                        <h3 className="text-sm dark:text-white xl:text-2xl  leading-6 text-gray-800">{orderDetail.productInfo.name}</h3>
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Size: </span> {orderDetail.sizeId !== null ? getSizeName(orderDetail.sizeId) : 'N/A'}</p>
                                            <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Color: </span> {getColorName(orderDetail.colorId)}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-8 items-start w-full">
                                        <p className="text-base dark:text-white xl:text-lg leading-6">{orderDetail.productInfo.price_sale}Vnđ <span className="text-red-300 line-through">{orderDetail.productInfo.price}Vnđ</span></p>
                                        <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{orderDetail.quantity}</p>
                                        <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">{orderDetail.productInfo.price * orderDetail.quantity}Vnđ</p>
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>
                    <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Tổng Tiền Hàng</p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{subtotal}</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Voucher <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span></p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">0</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Phí Vận Chuyển</p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">100</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Thành Tiền</p>
                                <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">{orderInfo?.orderTotal}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Vận Chuyển</h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                    <div className="w-8 h-8">
                                        <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">Trạng Thái Đơn Hàng<br /><span className="font-normal">{orderInfo?.status}</span></p>
                                    </div>
                                </div>

                            </div>
                            <div className="w-full flex justify-center items-center">
                                <button className="hidden hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View Carrier Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                    <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
                    <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                <div className="flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">{orderInfo?.fullname}</p>
                                    <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">{orderInfo?.phonenumber}</p>
                                </div>
                            </div>

                            <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="cursor-pointer text-sm leading-5 ">{orderInfo?.email}</p>
                            </div>
                        </div>
                        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Địa chỉ nhận hàng</p>
                                    <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{orderInfo?.address}</p>
                                </div>
                            </div>

                            <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                <button onClick={toggleCancelModal} className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Hủy Đơn Hàng</button>
                            </div>
                            {isCancelModalVisible && <CancelModal />}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails