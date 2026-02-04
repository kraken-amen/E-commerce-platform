import { createContext } from "react";
import { products } from "../assets/assets";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = 'DT';
    const delivery_fee = 10
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();
    const addToCard = async (product_id, size) => {
        let cartData = structuredClone(cartItems);
        if (!size) {
            toast.error('Please select a size');
            return;
        }
        if (cartData[product_id]) {

            if (cartData[product_id][size]) {
                cartData[product_id][size] += 1;
            }
            else {
                cartData[product_id][size] = 1;
            }
        }
        else {
            cartData[product_id] = {};
            cartData[product_id][size] = 1;
        }
        setCartItems(cartData);
    }
    const getCartTotal = () => {
        let total = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        total += cartItems[items][item];
                    }
                }
                catch (e) {
                }
            }
        }
        return total;
    }
    const updateQuantity = async (product_id, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[product_id][size] = quantity;
        setCartItems(cartData);
    }
    const getCartAmount = () => {
        let total = 0;
        for (const items in cartItems) {
            let ItemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        total += cartItems[items][item] * ItemInfo.price;
                    }
                }
                catch (e) {
                }
            }
        }
        return total;
    }
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        addToCard,
        cartItems,
        getCartTotal,
        updateQuantity,
        getCartAmount,
        navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
