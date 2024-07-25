import { createContext, useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let existingCartItems = localStorage.getItem('cart');
        if (existingCartItems) setCart(JSON.parse(existingCartItems));
    }, []);

    const addItemToCart = (item) => {

        const updatedCart = [...cart];
        const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex >= 0) {
            toast.info('Item already in cart');
            return;
        } else {
            toast.success('Item added');
            updatedCart.push(item);
        }
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeItemFromCart = (id) => {

        const updatedCart = cart.filter(cartItem => cartItem.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, clearCart }}>
            <ToastContainer autoClose={1000}/>
            {children}
        </CartContext.Provider>
    );
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
