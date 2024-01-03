import {
  AnalyticOrderPending,
  AnalyticStatusCancelled,
  AnalyticStatusComplete,
  AnalyticStatusCount,
  AnalyticStatusDelivery,
  AnalyticStatusProccessing
} from './components'
import { useEffect, useState } from 'react'

import { CardInfo } from './components/dashboard/card-info'
import { CartIcon2 } from '../../components'
import { IAnalyticStatusYear } from '../../interfaces'
import { LineChartOrderStatus } from './components/dashboard/line-chart'
import { getOrderStatusYear } from './components/dashboard/hooks/get-order-status'
import { message } from 'antd'

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState({
    orderPending: false,
    orderProcessing: false,
    orderOnDelivery: false,
    orderCancelled: false,
    orderComplete: false
  })

  const [orderStatusYear, setOrderStatusYear] = useState<IAnalyticStatusYear[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseStatusYeanr = await getOrderStatusYear()
        setOrderStatusYear(responseStatusYeanr)
      } catch (error) {
        message.error('Lỗi lấy dữ liệu')
      }
    }
    fetchData()
  }, [])

  const handleOpenModal = (item: string) => {
    switch (item) {
      case 'PENDING':
        setIsOpen({ ...isOpen, orderPending: !isOpen.orderPending })
        break
      case 'PROCESSING':
        setIsOpen({ ...isOpen, orderProcessing: !isOpen.orderProcessing })
        break
      case 'ONDELIVERY':
        setIsOpen({ ...isOpen, orderOnDelivery: !isOpen.orderOnDelivery })
        break
      case 'CANCELLED':
        setIsOpen({ ...isOpen, orderCancelled: !isOpen.orderCancelled })
        break
      case 'COMPLETED':
        setIsOpen({ ...isOpen, orderComplete: !isOpen.orderComplete })
        break
      default:
        break
    }
  }

  return (
    <>
      <main className='overflow-hidden'>
        <div className='mx-auto p-4 md:p-6'>
          <div className='grid grid-cols-5 gap-4'>
            {orderStatusYear.map((item) => (
              <CardInfo
                key={item._id}
                title={`Đơn hàng ${item._id}`}
                number={parseFloat(item.totalAmount.toLocaleString())}
                icon={<CartIcon2 />}
                price={true}
                onClick={() => handleOpenModal(item._id)}
              />
            ))}
          </div>
        </div>

        <AnalyticStatusCount />

        <div className='mx-auto p-4 md:p-6 xl:p-10'>
          <LineChartOrderStatus />
        </div>
      </main>
      <AnalyticOrderPending
        onClose={() => setIsOpen({ ...isOpen, orderPending: !isOpen.orderPending })}
        isOpen={isOpen.orderPending}
      />
      <AnalyticStatusProccessing
        onClose={() => setIsOpen({ ...isOpen, orderProcessing: !isOpen.orderProcessing })}
        isOpen={isOpen.orderProcessing}
      />
      <AnalyticStatusDelivery
        onClose={() => setIsOpen({ ...isOpen, orderOnDelivery: !isOpen.orderOnDelivery })}
        isOpen={isOpen.orderOnDelivery}
      />
      <AnalyticStatusCancelled
        onClose={() => setIsOpen({ ...isOpen, orderCancelled: !isOpen.orderCancelled })}
        isOpen={isOpen.orderCancelled}
      />
      <AnalyticStatusComplete
        onClose={() => setIsOpen({ ...isOpen, orderComplete: !isOpen.orderComplete })}
        isOpen={isOpen.orderComplete}
      />
    </>
  )
}

export default Dashboard
