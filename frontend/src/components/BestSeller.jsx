import React,{useContext,useState,useEffect} from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
function BestSeller() {
    const {products}=useContext(ShopContext);
    const [bestSellerProducts,setBestSellerProducts]=useState([]);
    useEffect(()=>{
        const bestSeller=products.filter((item)=>item.bestSeller);
        setBestSellerProducts(products.slice(0,5));
    },[products]);
  return (
    <div className='my-10'>
    <div className='text-center text-3xl py-8'>
        <Title text1={"BEST "} text2={"SELLER"}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Shop our latest collection of trendy and stylish clothing for men and women. From casual wear to formal attire, we have everything you need to look your best.
        </p>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSellerProducts.map((item,index)=>{
            return <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        })}
    </div>
    </div>
  )
}

export default BestSeller