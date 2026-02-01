import { createContext } from "react";
import { products } from "../assets/assets";
import { useState,useEffect } from "react";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = 'DT';
    const delivery_fee = 10
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems,setCartItems]=useState({});
    const addToCard = async(product_id,size) => {
        let cartData = structuredClone(cartItems);
        if(cartData[product_id]){
            if(cartData[product_id][size]){
                cartData[product_id][size]+=1;
            }
            else{
                cartData[product_id][size]=1;
            }
        }
        else{
            cartData[product_id]={};
            cartData[product_id][size]=1;
        }
        setCartItems(cartData);
    }
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        addToCard,
        cartItems
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
