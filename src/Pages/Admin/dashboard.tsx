import { useEffect, useState } from 'react'

import { CardInfo } from './components/dashboard/card-info'
import { CartIcon2 } from '../../components'
import { IAnalyticStatusYear } from '../../interfaces'
import { LineChartOrderStatus } from './components/dashboard/line-chart'
import { getOrderStatusYear } from './components/dashboard/hooks/get-order-status'
import { message } from 'antd'

const Dashboard = () => {
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

  return (
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
            />
          ))}
        </div>
      </div>

      <div className='mx-auto p-4 md:p-6 xl:p-10'>
        <LineChartOrderStatus />
      </div>
    </main>
  )
}

export default Dashboard
