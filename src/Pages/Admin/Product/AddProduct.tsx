import React, { useEffect, useState } from "react";
import { ICategories } from "../../../interfaces/categories";
import { getCategory } from "../../../api/categories";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../api/product";
import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';


const AddProduct = () => {
    const [productName, setProductNam] = useState('');
    const [imgUrl,setImgUrl] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [productSale, setProductSale] = useState('');
    const [Des, setDes] = useState('');
    const navigate = useNavigate();
    const [nameTouched, setNamtouched] = useState(false)
    const [imgTouched,setImgTouched] = useState(false);
    const [priceTouched,setPriceTouched] = useState(false);
    const [SaleTouched, setSaleTouched] = useState(false)
    const [DesTouched, setDesTouched] = useState(false)
    
    const hanlleSubmit = async(e: any)=>{
        e.prevenDefault()
        setNamtouched(true);
        setImgTouched(true);
        setDesTouched(true);
        setPriceTouched(true);
        setSaleTouched(true)

        if(!productName || !imgUrl || !productPrice || !productSale || !Des){return}

        const product ={
            name: productName,
            img: imgUrl,
            price: productPrice,
            price_sale: productSale,
            description: Des
        }
        try{
            const response = await addProduct(product);
            if(response.status === 200){
                console.log("Add Susscessfuly !",response.data);
                navigate('/admin/products')
                setProductNam('');
                setImgUrl('');
                setProductSale('')
                setDes('')
                setproductPrice('')
                setDesTouched(false);
                setImgTouched(false);
                setPriceTouched(false);
                setSaleTouched(false);
                setNamtouched(false)
            }else{
                console.error("Có lỗi khi thêm sản phẩm: ",response.data.message);
                
            }
            toast.success('Thêm sản phẩm thành công',{autoClose:2000})
        }catch(error:any){
            if(error?.response?.data?.message){
                console.error("Có lỗi khi gửi dữ liệu", error.response.data.message);
            }else if(error?.message){
                console.error("Có lỗi", error.message);
            }else{
                console.error("Có lỗi không xác định");
            }
        }
    }
    const [categories, setcategories] = useState<ICategories[]>([])
  console.log(categories);
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await getCategory();
      setcategories(data);
      console.log(data);

    }
    fetchProduct()
  }, [])
  return (
    <div className="flex flex-col items-center mt-10">
        <ToastContainer/>
      <h1 className="text-2xl font-bold mb-5">Thêm Sản Phẩm</h1>
      <form className="w-1/3" onSubmit={hanlleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productName"
          >
            Tên Sản Phẩm
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nhập Tên"
            id="productName"
            type="text"
            value={productName}
            onChange={(e)=> setProductNam(e.target.value)}
          />
          {nameTouched && !productName && <p className='text-red-500'>Bắt buộc phải nhập tên danh mục.</p>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="categoryImage"
          >
            Ảnh
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nhập Ảnh"
            id="productImage"
            type="text"
            value={imgUrl}
            onChange={(e)=>setImgUrl(e.target.value)}
          />
           {imgTouched && !imgUrl && <p className='text-red-500'>Bắt buộc phải nhập ảnh.</p>}
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
            value={productPrice}
            onChange={(e)=>setproductPrice(e.target.value)}
          />
           {priceTouched && !productPrice && <p className='text-red-500'>Bắt buộc phải nhập giá.</p>}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="categoryImage"
          >
            Giá_Sale
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nhập Giá Sale"
            id="categoryImage"
            type="number"
            value={productSale}
            onChange={(e)=>setProductSale(e.target.value)}
          />
           {SaleTouched && !productSale && <p className='text-red-500'>Bắt buộc phải nhập giá sale.</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="HeadlineAct"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Loại
          </label>

          <select
            name="HeadlineAct"
            id="HeadlineAct"
         
            className="mt-1.5 shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline   sm:text-sm"
          >
            <option value="">Nhập Loại</option>
            {categories.map((category)=>(
              <option key={category._id} value={category._id}>{category.name}</option>
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
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          value={Des}
          onChange={(e)=> setDes(e.target.value)} >
          </textarea>
          {DesTouched && !Des && <p className='text-red-500'>Bắt buộc phải nhập miêu tả.</p>}
        </div>

        <div className="flex justify-between items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Thêm Sản Phẩm
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
  );
};


export default AddProduct;