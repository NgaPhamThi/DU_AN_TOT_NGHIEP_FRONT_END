import { Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts'
import { DatePicker, Drawer, Space, message } from 'antd'
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker'
import { IAnalyticYear, IData, IFilterOrder } from '../../../../interfaces'
import { filterOrder, getOrderStatus } from './hooks/get-order-status'
import { useEffect, useState } from 'react'

import { CardInfo } from './card-info'
import { CartIcon2 } from '../../../../components'
import { analyticApi } from '../../../../api/analytic.api'

const { RangePicker } = DatePicker

interface IAnalyticOrderProps {
  isOpen: boolean
  onClose: () => void
}

export const AnalyticOrderPending = ({ isOpen, onClose }: IAnalyticOrderProps) => {
  const [orderStatus, setOrderStatus] = useState<IAnalyticYear[]>([])
  console.log('🚀 ~ file: analytic-order.tsx:20 ~ AnalyticOrderPending ~ orderStatus:', orderStatus)
  const [orderFilterDate, setOrderFilterDate] = useState<IFilterOrder | null>(null)
  const [data, setData] = useState<IData | null>(null)

  const onChange = async (
    _: DatePickerProps['value'] | RangePickerProps['value'],
    dateString: [string, string] | string
  ) => {
    const startDate = (dateString as [string, string])[0]
    const endDate = (dateString as [string, string])[1]
    const values = { startDate, endDate }

    /* kiểm tra xem enđate có lớn hơn startDate hay không */
    const isEndDateGreaterThanStartDate = new Date(endDate).getTime() > new Date(startDate).getTime()
    if (!isEndDateGreaterThanStartDate) {
      message.error('Ngày kết thúc phải lớn hơn ngày bắt đầu')
      return
    }

    /* lấy dữ liệu */
    const data = await filterOrder(values)
    setOrderFilterDate(data)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOrderStatus()
        const data = await analyticApi.analyticPending()
        setOrderStatus(response)
        setData(data.data)
      } catch (error) {
        message.error('Lỗi lấy dữ liệu')
      }
    }
    fetchData()
  }, [])

  const dataRechart = [
    {
      name: 'Doanh thu ngày',
      'Doanh thu': data?.day[0]?.totalAmount,
      'Số lượng đơn': data?.day[0]?.count
    },
    {
      name: 'Doanh thu tuần',
      'Doanh thu': data?.week[0]?.totalAmount,
      'Số lượng đơn': data?.week[0]?.count
    },
    {
      name: 'Doanh thu tháng',
      'Doanh thu': data?.month[0]?.totalAmount,
      'Số lượng đơn': data?.month[0]?.count
    },
    {
      name: 'Doanh thu năm',
      'Doanh thu': data?.year[0]?.totalAmount,
      'Số lượng đơn': data?.year[0]?.count
    }
  ]

  return (
    <Drawer
      title='Thông kê đơn hàng chờ xử lý'
      placement='right'
      onClose={onClose}
      open={isOpen}
      width={1024}
      extra={
        <Space>
          <RangePicker onChange={onChange} />
        </Space>
      }
    >
      {orderFilterDate && (
        <div className='grid grid-cols-4 gap-4 mb-4'>
          <CardInfo title='Doanh thu tìm kiếm' number={orderFilterDate?.totalMoney} price={true} icon={<CartIcon2 />} />
        </div>
      )}
      <div className='grid grid-cols-4 gap-4'>
        <CardInfo title='Doanh thu ngày' number={data?.day[0]?.totalAmount} price={true} icon={<CartIcon2 />} />
        <CardInfo title='Số lượng đơn theo ngày' number={data?.day[0]?.count} icon={<CartIcon2 />} />
        <CardInfo title='Doanh thu tuần' number={data?.week[0]?.totalAmount} price={true} icon={<CartIcon2 />} />
        <CardInfo title='Số lượng đơn theo tuần' number={data?.week[0]?.count} icon={<CartIcon2 />} />
        <CardInfo title='Doanh thu tháng' number={data?.month[0]?.totalAmount} price={true} icon={<CartIcon2 />} />
        <CardInfo title='Số lượng đơn theo tháng' number={data?.month[0]?.count} icon={<CartIcon2 />} />
        <CardInfo title='Doanh thu năm' number={data?.year[0]?.totalAmount} price={true} icon={<CartIcon2 />} />
        <CardInfo title='Số lượng đơn theo năm' number={data?.year[0]?.count} icon={<CartIcon2 />} />
      </div>
      <div className='mt-10'>
        <ComposedChart
          width={900}
          height={400}
          data={dataRechart}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke='#f5f5f5' />
          <XAxis dataKey='name' scale='band' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='Doanh thu' barSize={20} fill='#413ea0' />
          <Line type='monotone' dataKey='Số lượng đơn' stroke='#ff7300' />
        </ComposedChart>
      </div>
    </Drawer>
  )
}
