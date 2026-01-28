import React,{useContext,useState} from 'react'
import {ShopContext} from '../context/ShopContext'
const LatestCollection = ()=> {
    const {products}=useContext(ShopContext);
    const [latestProducts,setLatestProducts]=useState([]);
    useEffect(()=>{
        const products=products.filter(product=>product.featured===true);
        setLatestProducts(products.slice(0,10));
    },[products]);
    console.log(products);
    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"LATEST"} text2={"COLLECTION"}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Shop our latest collection of trendy and stylish clothing for men and women. From casual wear to formal attire, we have everything you need to look your best.</p>
            </div>
        </div>
    )
}

export default LatestCollection