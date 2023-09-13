import { createContext, useState } from "react";

export const ContextCart = createContext({cart: []})

export const CartProvider =({ children }) => {
    const [cart, setCart] = useState([])

    console.log (cart)

    const addProduct = (item,quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev,{...item, quantity}])
        } else {
            console.error ('el producto ya fue agregado')
        }
    }

    const removeProduct = (itemId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart (cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    const isInCart = (itemId) => {
        return  cart.some (prod => prod.id === itemId)
    }

    const total = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity * prod.precio, 0)
    }

    return (
        <ContextCart.Provider value ={{ cart, addProduct, removeProduct, clearCart, total, totalQuantity}}>
            { children }
        </ContextCart.Provider>
    )
}
