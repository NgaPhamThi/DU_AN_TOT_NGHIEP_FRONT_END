import { Link, useNavigate, useParams } from "react-router-dom"
import { getById, getProduct } from "../api/product"
import { useEffect, useState } from "react"
import { IProduct } from "../interfaces/product"
import Product from "../components/product"
import { IColor } from "../interfaces/color"
import { getColor } from "../api/color"
import { ISize } from "../interfaces/size"
import { getSize } from "../api/size"
import { CartItem, useShoppingContext } from "../context/ShoppingCartContext"
import { Comments } from "../interfaces/comment"
import { jwtDecode } from "jwt-decode"
import { toast } from "react-toastify"
import axios from "axios"
import { getComment } from "../api/comment"
import { Avatar, Button, Input, Progress, Rate, Space } from "antd"
import { getCategory } from "../api/categories"
import { ICategories } from "../interfaces/categories"
interface TokenPayload {
    id: string;
    // Bạn cần thêm các trường khác từ payload token nếu cần
}
const DetailPage = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const [products, setProducts] = useState<IProduct[]>([])
    const [colors, setColors] = useState<IColor[]>([])
    const [sizes, setSizes] = useState<ISize[]>([])
    const [color, setColor] = useState<string | null>(null)
    const [size, setSize] = useState<string | null>(null)
    const [quantity, setQuantity] = useState<number>(1)
    const { productId } = useParams()
    const [productStock, setProductStock] = useState<number>(0);
    const [comments, setComments] = useState<Comments[]>([]);
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [categories, setCategories] = useState<ICategories[]>([]);
    const getUserIdFromToken = (): string | null => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.log('Token not found in localStorage.');
            return null;
        }
        try {
            const decoded = jwtDecode<TokenPayload>(token);
            console.log(decoded); // Kiểm tra xem decoded token có đúng không
            return decoded.id;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    };
    const getUser = getUserIdFromToken()
    const handleSubmitComment = async () => {
        if (!comment.trim()) return;
        const id = getUserIdFromToken();
        if (!id) {

            toast.error('Bạn cần đăng nhập để thực hiện chức năng này.', { autoClose: 2000 })
            return;
        }
        try {
            setIsSubmitting(true);
            const response = await axios.post('http://localhost:8080/api/comment', {
                content: comment,
                productId,
                userId: id,
            }, {
                headers: {
                    // Gửi token trong header nếu API của bạn yêu cầu
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            // Xử lý response ở đây
            console.log(response.data);
            toast.success('Thêm bình luận thành công', { autoClose: 2000 })
            setComment('');
            fetchComment();
        } catch (error) {
            console.error('Error submitting comment:', error);
            toast.error('Lỗi khi thêm bình luận', { autoClose: 2000 })
        } finally {
            setIsSubmitting(false);

        }
    };
    const fetchComment = async () => {
        if (productId) {
            const { data } = await getComment(productId)
            console.log(data);
            setComments(data.comments)

        }
    }
    useEffect(() => {
        fetchComment()
    }, [])
    const fetProduct = async () => {
        if (productId) {
            const { data } = await getById(productId)
            // console.log(data);
            setProduct(data)
            setProductStock(data.quantity)

        }
    }
    useEffect(() => {
        fetProduct()
    }, [productId])
    const fetProducts = async () => {
        const { data } = await getProduct()
        // console.log(data);
        setProducts(data)
    }
    const fetchCategory = async () => {
        const categoryResponse = await getCategory()
        setCategories(categoryResponse.data);
    }
    const getCategoryName = (categoryId: String) => {
        const category = categories.find(cat => cat._id === categoryId);
        return category ? category.name : 'Unknown';
    };
    useEffect(() => {
        fetProducts()
        fetchCategory()
    }, [])
    const fetColor = async () => {
        const { data } = await getColor()
        // console.log(data);
        setColors(data)

    }
    useEffect(() => {
        fetColor()
    }, [])
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [productId])
    const fetSize = async () => {
        const { data } = await getSize()
        // console.log(data);
        setSizes(data)

    }
    useEffect(() => {
        fetSize()
    }, [])
    const { addCartItem } = useShoppingContext()
    const addQuantity = (type: string) => {
        console.log('ok');

        if (type == 'plus') {
            setQuantity(quantity + 1)
        } else {
            if (quantity === 0) return
            setQuantity(quantity - 1)
        }
    }
    const addCart = (product: IProduct, type: string) => {
        if (!size || !color || quantity == 0) {
            return alert('Bạn Cần nhập thông tin size,color,quantity')
        }
        if(quantity > productStock){
            return alert(`Số lượng sản phẩm không đủ (${productStock} sản phẩm còn lại).`);
        }
        const cartItem: CartItem = {
            _id: typeof product._id === 'string' || typeof product._id === 'number' ? product._id : '',
            name: product.name,
            img: product.img,
            price: product.price,
            colorId: color,
            sizeId: size,
            quantity
        }
        addCartItem(cartItem)
        if (type == 'TO_CART') {
            navigate('/cart')
        }
    }
    return (
        <section className="py-20 overflow-hidden bg-white font-poppins dark:bg-gray-800">
            <div className="max-w-[1340px] px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="flex flex-wrap -mx-4 mb-32">
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="sticky top-0 z-50 overflow-hidden ">
                            <div className="relative mb-6 lg:mb-10" style={{ height: "450px" }}>
                                <img src={selectedImage || (product.img && product.img[0])}
                                    alt="" className="object-contain w-full h-full " />
                            </div>
                            <div className="flex-wrap hidden md:flex ">
                                {product.img && product.img.slice(0, 4).map((image, index) => (
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <div
                                            className="block border border-blue-100 dark:border-gray-700 dark:hover:border-gray-600 hover:border-blue-300 ">
                                            <img src={image}
                                                alt="" className="object-cover w-full lg:h-32"
                                                onClick={() => setSelectedImage(image)} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="lg:pl-20">
                            <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                                <span className="text-lg font-medium text-rose-500 dark:text-rose-200">Mã SP : <span className="text-black text-base">{product._id}</span></span>
                                <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl"> {product.name}</h2><br />
                                <span className="text-lg font-medium text-rose-500 dark:text-rose-200">Loại : <span className="text-black text-base">{getCategoryName(product.categoryId)}</span></span>
                                < br />
                                <div className="mb-8 mt-3 border-b border-gray-200 dark:border-gray-700"></div>
                                <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 "><span> {product.price ? product.price.toLocaleString() + 'đ' : ''}</span></p>
                            </div>
                            <div className="mb-8">
                                <h2 className="mb-2 text-xl font-bold dark:text-gray-400">Color</h2>
                                <div className="flex flex-wrap gap-4 -mb-2">
                                    {colors.map((colorItem, index) => (
                                        <div className="p-1 mb-2 mr-2    hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400  " >
                                            <span key={index} onClick={() => setColor(colorItem._id as string)} className={`${color == colorItem._id ? 'border-orange-500' : ''} px-[30px] py-[7px] w-10 h-10 bg-red-600 rounded-xl border`} style={{ background: colorItem.name }}></span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pb-6 mb-8 border-b border-gray-300 dark:border-gray-700">
                                <h2 className="mb-2 text-xl font-bold dark:text-gray-400">Size</h2>
                                <div className="flex flex-wrap -mb-2">
                                    {sizes.map((sizeItem, index) => (
                                        <button onClick={() => setSize(sizeItem._id as string)} key={index}
                                            className={`${size === sizeItem._id ? 'border-blue-500' : ''}py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400`}>{sizeItem.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center ">
                                <div className="mb-4 mr-4 lg:mb-0">
                                    <div className="w-28">
                                        <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                            <button onClick={addQuantity.bind(this, 'minus')}className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                                <span className="m-auto text-2xl font-thin">-</span>
                                            </button>
                                            <input type="number" className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black" placeholder="1"
                                                value={quantity} />
                                            <button onClick={addQuantity.bind(this, 'plus')} className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                                <span className="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4 mr-4 lg:mb-0">
                                    <button onClick={() => addCart(product, 'TO_CART')} className="w-full h-10 p-2 mr-4 bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">Mua Ngay</button>
                                </div>
                                <div className="mb-4 mr-4 lg:mb-0">
                                    <button onClick={() => addCart(product, 'ADD_CART')}
                                        className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path
                                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mb-4 lg:mb-0">
                                    <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-heart" viewBox="0 0 16 16">
                                            <path
                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen mx-auto p-6  bg-white rounded-md shadow-md mt-8">
                    <h2 className="text-xl font-bold mb-2">Mô tả sản phẩm</h2>
                    <p className="text-base text-gray-700" style={{ whiteSpace: "pre-wrap" }}>{product.description}</p>
                </div>
                {/* Đặt bình luận ở đây */}
                <div>
                <h2 className="font-bold text-[27px] text-center pt-8 pb-8">Sản Phẩm Mới</h2>
                <section id="Projects"
                    className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 mt-10 mb-5">

                    {products.slice(11, 19).map((item) => <Product key={item._id} data={item} />)}
                </section>
                </div>
            </div>
        </section>
    )


}

export default DetailPage