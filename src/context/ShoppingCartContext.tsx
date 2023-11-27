import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type ShoppingContextProviderProps = {
    children: ReactNode
}
type CartItem = {
    _id: number | string
    name: string
    price: number
    quantity: number,
    image: string
    size: string
    color: string
}
type ProductItem = {
    _id: number | string
    name: string
    price: number
    image: string
}
interface ShoppingContextType {
    cartQty: number
    totalPrice: number
    cartItem: CartItem[]
    increaseQty: (id: string) => void
    decreaseQty: (id: string) => void
    addCartItem: (item: ProductItem) => void
    removeCartItem: (id: string) => void
    clearCart: () => void
}
export const useShoppingContext = () => {
    return useContext(ShoppingContext)
}
//useContext có chứa Consumer để giúp chúng ta có thể nhận được dữ liệu
//từ Provider bằng cách chuyền shoppingContext vào useContext 
//Bây giờ ShoppingContext.Provider có value là gì thì useShoppingContext
//sẽ nhận được nó ở đây
const ShoppingContext = createContext<ShoppingContextType>({} as ShoppingContextType)
//createContext tạo ra một cái object chứa Provider,Consumer để giúp chúng ta 
//có thể cung cấp gữ liệu và nhận giữ liệu (Provider,Consumer nó là react component)
export const ShoppingContextProvider = ({ children }: ShoppingContextProviderProps) => {
    const [cartItem, setCartItem] = useState<CartItem[]>(() => {
        const jsonCartData = localStorage.getItem('shopping_cart')
        return jsonCartData ? JSON.parse(jsonCartData) : []
    })

    useEffect(() => {
        localStorage.setItem('shopping_cart', JSON.stringify(cartItem))
    }, [cartItem])

    const cartQty = cartItem.reduce((qty, item) => qty + item.quantity, 0)
    const totalPrice = cartItem.reduce((total, item) => total + item.quantity * item.price, 0)
    const increaseQty = (id: string) => {
        console.log("increaseQty => ", id);
        const currentCartItem = cartItem.find(item => item._id === id)
        if (currentCartItem) {
            const newItems = cartItem.map((item) => {
                if (item._id === id) {
                    return { ...item, quantity: item.quantity + 1 }

                } else {
                    return item
                }
            })
            setCartItem(newItems)

        }
    }
    const decreaseQty = (id: string) => {
        console.log("increaseQty => ", id);
        const currentCartItem = cartItem.find(item => item._id === id)
        if (currentCartItem?.quantity == 1) {
            removeCartItem(id)
        } else {
            const newItems = cartItem.map((item) => {
                if (item._id === id) {
                    return { ...item, quantity: item.quantity - 1 }

                } else {
                    return item
                }
            })
            setCartItem(newItems)
        }
    }
    const addCartItem = (product: ProductItem) => {
        console.log("product", product)
        if (product) {
            const currentCartItem = cartItem.find((item) => item._id == product._id)
            if (currentCartItem) {
                const newItems = cartItem.map((item) => {
                    if (item._id === product._id) {
                        return { ...item, quantity: item.quantity + 1 }

                    } else {
                        return item
                    }
                })
                setCartItem(newItems)

            } else {
                const newItem = { ...product, quantity: 1 }
                setCartItem([...cartItem, newItem])
            }

        }
    }
    const removeCartItem = (id: string) => {
        console.log("removeCartItem =>", id);
        const currentCartItemIndex = cartItem.findIndex((item) => item._id == id)
        const newItem = [...cartItem]
        newItem.splice(currentCartItemIndex, 1)
        setCartItem(newItem)
    }
    const clearCart = () => {
        console.log("clearCart =>");
        setCartItem([])

    }
    return (
        <ShoppingContext.Provider value={{ cartItem, cartQty, totalPrice, increaseQty, decreaseQty, addCartItem, clearCart, removeCartItem }}>
            {children}
        </ShoppingContext.Provider>
    )

}
//Tạo ta một cái Provider có props tên là value nó nhận một cái dữ liệu gì đó,
//Tất cả những cái children của cái Provider đều có thể nhận được dữ liệu trong value
//
export default ShoppingContext