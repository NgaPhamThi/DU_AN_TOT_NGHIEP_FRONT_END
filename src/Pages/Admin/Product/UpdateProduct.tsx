import React, { useEffect, useState } from 'react'
import { ICategories } from "../../../interfaces/categories";
import { getCategory } from "../../../api/categories";
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IProduct } from '../../../interfaces/product';
import { getById, updateproduct } from '../../../api/product';


const UpdateProduct = () => {
  const [categories,setcategories] = useState<ICategories[]>([])
  const [product,setProduct]=useState<IProduct>({} as IProduct)
  const {id} = useParams();
  const [editedImageIndex, setEditedImageIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  useEffect(()=>{
    async function fetchData() {
      try{
        const {data} = await getCategory();
        // set
        setcategories(data)
      }catch(error){
        console.error('Error fetching categories:', error);
      }
    }
    fetchData();
  },[])

  useEffect(()=>{
    async function fetchProduct() {
      try{
        if(id){
          const {data} = await getById(id)
          setProduct(data)
        }
      }catch(error){
        console.error('Error fetching product:', error)
      }
    }
    fetchProduct();
  },[id]);
  

  
  const hanldeChage = (e: React.ChangeEvent<HTMLInputElement |HTMLTextAreaElement | HTMLSelectElement >)=>{
    const {name, value} = e.target;
    if(name === 'img'){
      setProduct((prevProduct)=>({
        ...prevProduct,
        img:value.split(',').map((url) => url.trim()),
      }))
    }else{
      setProduct((prevProduct)=>({

        ...prevProduct,
        [name]: value,
      }))
    }
   
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.target.value;
    setProduct((prevProduct) => ({
      ...prevProduct,
      categoryId: categoryId,
    }));
  };
  const handleImageChange = async (e:any) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const imageUrl = await uploadImageToCloudinary(file);
        const updatedImages = [...product.img]; // Create a copy of the existing images array
        if (editedImageIndex !== null) {
          // If we are editing an existing image, replace it in the array
          updatedImages[editedImageIndex] = imageUrl;
        } else {
          // If not editing, add the new image to the array
          updatedImages.push(imageUrl);
        }
        setProduct((prevProduct) => ({
          ...prevProduct,
          img: updatedImages,
        }));
        setEditedImageIndex(null); // Reset the index after editing
      } catch (error) {
        toast.error('Error uploading image. Please try again.');
      }
    }
  };
  const uploadImageToCloudinary = async (file:any, imageId:any) => {
    try {
      const cloudName = 'dfftwrlu2'; // Replace with your Cloudinary cloud name
      const uploadPreset = 'upload_preset'; // Replace with your Cloudinary upload preset

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);
       // Set the Cloudinary public ID with the image identifier

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        return data.secure_url;
      } else {
        throw new Error(`Error uploading image: ${data.message}`);
      }
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      throw error;
    }
  };
  const editImage = (index) => {
    // Set the index of the image being edited
    setEditedImageIndex(index);
  };
  const removeImage = (index) => {
    // Remove the image at the specified index
    const updatedImages = [...product.img];
    updatedImages.splice(index, 1);
    setProduct((prevProduct) => ({
      ...prevProduct,
      img: updatedImages,
    }));
  };
  const handleSubmit = async( e:React.FormEvent)=>{
    e.preventDefault();
    try{
        if(id && product){
            await updateproduct(product,id) 
      setTimeout(() => {
        navigate('/admin/products');
      }, 3000);
      toast.success('Update product Susscessfully !', { autoClose: 2000 })
        }
      
    }catch(error){
      console.error('Error updating product:', error);
      toast.error('Có lỗi xảy ra. Vui lòng thử lại sau')
    }
  }
  return (
    <div className="flex flex-col items-center mt-10">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-5">UPDATE Sản Phẩm</h1>
      <form className="w-1/3"  onSubmit={handleSubmit} >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="categoryName"
          >
            Tên Sản Phẩm
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nhập Tên"
            id="categoryName"
            type="text"
            name='name'
            value={product.name}
            onChange={hanldeChage}
            
          />

        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="categoryImage"
          >
            Ảnh
          </label>
          {/* <img src={product.img} alt="" /> */}
          {/* <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nhập Ảnh"
            id="categoryImage"
            type="text"
            name='img'
            value={product.img? product.img.join(',') : ''}
            onChange={hanldeChage}

          />
           */}
            <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1.5 shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {product.img && product.img.map((image, index) => (
    <div key={index} className="mt-2 flex gap-2">
      <img src={image} alt={`Product Image ${index}`} className="max-w-full h-32" />
      <button type="button" onClick={() => editImage(index)}>
        Edit
      </button>
      <button type="button" onClick={() => removeImage(index)}>
        Remove
      </button>
    </div>
  ))}

        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="categoryImage"
          >
            Giá
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nhập Giá"
            id="categoryImage"
            type="number"
            name='price'
            value={product.price}
            onChange={hanldeChage}
          />

        </div>
        <div className="mb-4">
          <label
            htmlFor="HeadlineAct"
            className="block text-gray-700 text-sm font-bold mb-2"
            
          >
            Loại
          </label>

         <select
  id="HeadlineAct"
  onChange={handleCategoryChange}
  value={product.categoryId} // Đảm bảo giữ cho giá trị select được hiển thị đúng
  className="mt-1.5 shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sm:text-sm"
>
  <option value="">Nhập Loại</option>
  {categories.map((category) => (
    <option key={category._id} value={category._id}>
      {category.name}
    </option>
  ))}
</select>
         
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="categoryImage"
          >
            Description
          </label>
          <textarea name='description'   onChange={hanldeChage} value={product.description} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" >

          </textarea>

        </div>

        <div className="flex justify-between items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Cập nhật Sản Phẩm
          </button>
          <a href="/admin/products">
            <button
              className="bg-blue-500 flex gap-2 items-center hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              Quay Lại
            </button>
          </a>
        </div>
      </form>
    </div>
  )
}

export default UpdateProduct