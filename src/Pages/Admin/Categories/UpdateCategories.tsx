import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getByidCategory, updateCategory } from '../../../api/categories';
import { ToastContainer, toast } from 'react-toastify';
import { ICategories } from '../../../interfaces/categories';



const UpdateCategories = () => {
  const [categoryName, setCategoryName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();
  const [nameTouched, setNameTouched] = useState(false);
  const [imgTouched, setImgTouched] = useState(false);
  const { id } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        console.error("ID không được cung cấp");
        return; // Ngăn chặn việc thực hiện fetchData nếu không có id
      }
      try {
        const response = await getByidCategory(id); // Make sure to implement this in your API
        if (response.status === 200) {
          setCategoryName(response.data.name);
          setImageUrl(response.data.img);
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    }
    fetchData();
  }, [id]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setNameTouched(true);
    setImgTouched(true);
    if (!id) {
      console.error("ID không được cung cấp");
      return; // Ngăn chặn việc thực hiện handleSubmit nếu không có id
  }
    if (!categoryName || !imageUrl) {
      return;
    }


    const category = {
      name: categoryName,
      img: imageUrl
    };

    try {
      const response = await updateCategory(category,id);
      if (response.status === 200) {
        console.log("Thêm danh mục thành công:", response.data);
        setTimeout(() => {
          navigate('/admin/categories');
        }, 3000);
        // Reset form hoặc chuyển hướng người dùng, hoặc thực hiện hành động khác
        setCategoryName('');
        setImageUrl('');
        setNameTouched(false);
        setImgTouched(false);
      } else {
        console.error("Có lỗi khi thêm danh mục:", response.data.message);
      }
      toast.success('Thêm danh mục thành công', { autoClose: 2000 })

    } catch (error: any) {
      if (error?.response?.data?.message) {
        console.error("Có lỗi khi gửi dữ liệu:", error.response.data.message);
      } else if (error?.message) {
        console.error("Có lỗi:", error.message);
      } else {
        console.error("Có lỗi không xác định");
      }
      toast.error('Sửa danh mục không thành công', { autoClose: 2000 })

    }
  }
  return (
    <div className="flex flex-col items-center mt-10">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-5">Thêm Danh Mục</h1>
      <form className="w-1/3" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryName">
            Tên Danh Mục
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder='Nhập Tên'
            id="categoryName"
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}

          />
          {nameTouched && !categoryName && <p className='text-red-500'>Bắt buộc phải nhập tên danh mục.</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryImage">
            Ảnh
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder='Nhập Ảnh'
            id="categoryImage"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}

          />
          {imgTouched && !imageUrl && <p className='text-red-500'>Bắt buộc phải nhập URL hình ảnh.</p>}
        </div>

        <div className="flex justify-between items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Thêm Danh Mục
          </button>
          <a href="/admin/categories">
            <button className="bg-blue-500 flex gap-2 items-center hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              Quay Lại
            </button></a>


        </div>
      </form>
    </div>
  )
}

export default UpdateCategories