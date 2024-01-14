import { useEffect, useState } from 'react'

import { CardInfo } from './components/dashboard/card-info'
import { CartIcon2 } from '../../components'
import { IAnalyticStatusYear } from '../../interfaces'
import { LineChartOrderStatus } from './components/dashboard/line-chart'
import { TopProduct } from './Analytics/top-product'
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
              number={item.totalAmount}
              icon={<CartIcon2 />}
              price={true}
            />
          ))}
        </div>
      </div>

      <div className='mx-auto p-4 md:p-6 xl:p-10'>
        <LineChartOrderStatus />
      </div>
      <div className='mx-auto p-4 md:p-6 xl:p-10'>
        <TopProduct />
      </div>
    </main>
  )
}

export default Dashboard
