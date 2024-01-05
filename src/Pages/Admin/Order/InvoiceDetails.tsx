import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { IOrderDetail } from '../../../interfaces/orderDetail';
import { useParams } from 'react-router-dom';
import { getByIdOrderDetail,updateStatusOrder } from '../../../api/orders';
import { IOrders } from '../../../interfaces/Orders';
import { getSize } from '../../../api/size';
import { getColor } from '../../../api/color';
import { getVoucherById } from '../../../api/vouchers'; 

const statusOptions = [
    { value: 'PENDING', label: 'chờ duyệt' },
    { value: 'PROCESSING', label: 'lấy hàng' },
    { value: 'ONDELIVERY', label: 'đang giao' },
    { value: 'COMPLETED', label: 'giao hàng thành công' },
    { value: 'CANCELLED', label: 'Hủy đơn hàng' }
  ];
type Props = {}

const InvoiceDetails = (props: Props) => {
    const [orderDetails, setOrderDetails] = useState<IOrderDetail[]>([])
    const [orderInfo, setOrderInfo] = useState<IOrders> ({} as IOrders);
    const [currentStatus, setCurrentStatus] = useState(orderInfo.status);
    const [voucherName, setVoucherName] = useState<string | null>(null);
    
    // console.log(orderInfo,"dâda")
    const [sizes, setSizes] = useState<any[]>([]); // Replace 'any[]' with the actual type of your size objects
    const [colors, setColors] = useState<any[]>([]);
    const [subtotal, setSubtotal] = useState<number>(0);
    const fetchOrderDetail = async ()=>{
        try {
            if(orderId){
                const {data} = await getByIdOrderDetail(orderId)
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
    const {orderId} = useParams()
    console.log(orderId,"èddsds");
    useEffect(() => {
        if (orderId) {
          fetchOrderDetail(orderId);
        }
      }, [orderId]);
      
  useEffect(() => {
    // Cập nhật currentStatus từ orderInfo.status khi orderInfo thay đổi
    setCurrentStatus(orderInfo.status || '');
  }, [orderInfo]);
//  console.log(orderInfo,"1323");
const handleStatusChange = async (newStatus: string) => {
    setCurrentStatus(newStatus);

    try {
      // Gọi API để cập nhật trạng thái
      await updateStatusOrder(orderId, { status: newStatus });

      // Sau khi cập nhật trạng thái thành công, cập nhật state
      setOrderInfo((prevOrderInfo) => ({
        ...prevOrderInfo,
        status: newStatus,
      }));
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };
  useEffect(() => {
    fetchOrderDetail();
  }, [orderId]);

  useEffect(() => {
   
    // setCurrentStatus(orderInfo.status || '');
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
    useEffect(()=>{
        fetchOrderDetail()
        fetchSizesAndColors()
    },[])
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
    const getFilteredOptions = (currentStatus: any) => {
    
        if (currentStatus === 'PENDING') {
          return statusOptions.filter((status) => status.value === 'PROCESSING' || status.value === 'CANCELLED' || status.value === currentStatus);
        } else if (currentStatus === 'PROCESSING') {
          return statusOptions.filter((status) => status.value === 'ONDELIVERY'|| status.value === 'CANCELLED' || status.value === currentStatus);
        } else if (currentStatus === 'ONDELIVERY') {
          return statusOptions.filter((status) => status.value === 'COMPLETED'|| status.value === 'CANCELLED' || status.value === currentStatus);
        }
        else if (currentStatus === 'COMPLETED') {
            return statusOptions.filter((status) => status.value === currentStatus);
          }
          else if (currentStatus === 'CANCELLED') {
            return statusOptions.filter((status) => status.value === currentStatus);
          }
        return statusOptions;
      };
   
  return (
    
    <div className="2xl:container 2xl:mx-auto py-14 px-4 md:px-6 xl:px-20">
    <div className="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8">
        
        <div className="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full">
           <div className='flex justify-between items-center xl:w-full'>
           <div>
           <h3 className="text-3xl xl:text-4xl dark:text-white font-semibold leading-7 xl:leading-9 w-full md:text-left text-gray-800">Chi tiết hóa đơn</h3>
            <p className="text-base leading-none dark:text-white mt-4 text-gray-800">MÃ HĐ: <span className="font-semibold">{orderInfo._id}</span></p>
           </div>
           <div>
           <p className="text-base leading-none flex items-center dark:text-white mt-4 text-gray-800"><img className='pr-3' src="/delivery.png" alt="" />Trạng Thái Đơn Hàng: <span className="font-semibold">
            <select value={currentStatus} onChange={(e) => handleStatusChange(e.target.value)}>
            <option value="" disabled hidden>--chọn trạng thái--</option>
            {getFilteredOptions(currentStatus).map((status) => (
            <option key={status.value} value={status.value}>
            {status.label}
            </option>
            ))}
            </select>
</span></p>
           </div>
           </div>
            <div className="flex justify-center items-center w-full mt-8 flex-col space-y-4">
                {orderDetails.map((orderDetail)=>(
                    <div key={orderDetail._id} className="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full">
                    <div className="-m-px w-40 md:w-32">
                        <img className="hidden md:block" src={orderDetail.productInfo.img[0]} alt="girl-in-red-dress" />
                        <img className="md:hidden" src="https://i.ibb.co/f8pyz8q/Rectangle-8.png" alt="girl-in-red-dress" />
                    </div>
                    <div className="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8">
                        <div className="flex flex-col md:flex-shrink-0 justify-start items-start">
                            <h3 className="text-lg md:text-xl dark:text-white w-full font-semibold leading-6 md:leading-5 text-gray-800">{orderDetail.productInfo.name}</h3>
                            <div className="flex flex-row  justify-start space-x-4 xl:items-center md:space-x-6 items-start mt-4">
                                <div>
                                <p className="text-sm leading-none dark:text-gray-300 pb-3 text-gray-600">Color: <span className="text-gray-800 dark:text-white">{getColorName(orderDetail.colorId)}</span></p>
                                <p className="text-sm leading-none dark:text-gray-300 text-gray-600">Size: <span className="text-gray-800 dark:text-white"> {orderDetail.sizeId !== null ? getSizeName(orderDetail.sizeId) : 'N/A'}</span></p>
                                </div>
                                <p className="text-sm leading-none dark:text-gray-300 text-gray-600">Quantity: <span className="text-gray-800 dark:text-white"> {orderDetail.quantity}</span></p>
                                <p className="text-base dark:text-white xl:text-lg leading-6">{orderDetail.productInfo.price_sale}Vnđ </p>
                            </div>
                        </div>
                        <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                            <p className="text-xl dark:text-white lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">{orderDetail.productInfo.price_sale * orderDetail.quantity}Vnđ</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="flex flex-col flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
                <div className="flex justify-start items-start flex-col md:flex-row w-full md:w-auto space-y-8 md:space-y-0 md:space-x-14 xl:space-x-8 lg:w-full">
                    <div className="flex jusitfy-start items-start flex-col space-y-2">
                        <p className="text-base dark:text-white font-semibold leading-4 text-gray-800"> Địa Chỉ Nhận Hàng</p>
                        <p className="text-sm leading-5 dark:text-gray-300 text-gray-600">{orderInfo.address}</p>
                    </div>
                    <div className="flex jusitfy-start items-start flex-col space-y-2">
                        <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Tên Khách Hàng</p>
                        <p className="text-sm leading-5 dark:text-gray-300 text-gray-600">{orderInfo.fullname}</p>
                    </div>
                    <div className="flex jusitfy-start items-start flex-col space-y-2">
                        <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Số Điện Thoại</p>
                        <p className="text-sm leading-5 dark:text-gray-300 text-gray-600">{orderInfo.phonenumber}</p>
                    </div>
                    <div className="flex jusitfy-start items-start flex-col space-y-2">
                        <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Email</p>
                        <p className="text-sm leading-5 dark:text-gray-300 text-gray-600">{orderInfo.email}</p>
                    </div>
                    
                </div>
                <div className="flex flex-col w-full space-y-4 w-full">
                    <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                        <div className="flex justify-between w-full">
                            <p className="text-base dark:text-white leading-4 text-gray-800">Tổng Tiền Hàng</p>
                            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{subtotal}Vnđ</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <p className="text-base leading-4 dark:text-white text-gray-800">
                                Discount
                                <span className="bg-gray-200  p-1 text-xs font-medium leading-3 text-gray-800">Voucher</span>
                            </p>
                            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{voucherName}Vnđ</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <p className="text-base dark:text-white leading-4 text-gray-800">Phí Vận Chuyển</p>
                            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">100Vnđ</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Thành Tiền</p>
                        <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">{orderInfo.orderTotal}Vnđ</p>
                    </div>
                    <div className="flex w-full justify-center items-center pt-1 md:pt-4 xl:pt-8 space-y-6 md:space-y-8 flex-col">
                        <button className="py-5 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 w-full text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black">Track Your Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default InvoiceDetails