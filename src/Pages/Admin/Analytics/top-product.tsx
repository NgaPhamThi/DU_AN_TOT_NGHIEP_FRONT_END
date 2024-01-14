import { Table, message } from 'antd'
import { useEffect, useState } from 'react'

import { IProductTop } from '../../../interfaces'
import { analyticApi } from '../../../api/analytic.api'

export const TopProduct = () => {
  const [topProduct, setTopProduct] = useState<IProductTop | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await analyticApi.top10Product()
        setTopProduct(response.data)
      } catch (error) {
        message.error('Lỗi tải dữ liệu')
      }
    })()
  }, [])

  if (!topProduct) return null

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Số lượng',
      dataIndex: 'totalQuantity',
      key: 'totalQuantity'
    }
  ]

  const dataCompleted = topProduct.completed
    .map((product) => ({
      key: product._id,
      name: product.name,
      totalQuantity: product.totalQuantity
    }))
    .sort((a, b) => b.totalQuantity - a.totalQuantity)

  const dataCancelled = topProduct.cancelled
    .map((product) => ({
      key: product._id,
      name: product.name,
      totalQuantity: product.totalQuantity
    }))
    .sort((a, b) => b.totalQuantity - a.totalQuantity)

  return (
    <div className='grid grid-cols-2 gap-10'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Top sản phẩm giao hàng thành công</h2>
        <Table dataSource={dataCompleted} columns={columns} />
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Top sản phẩm giao hàng thất bại</h2>
        <Table dataSource={dataCancelled} columns={columns} />
      </div>
    </div>
  )
}
