import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
const product = () => {
  const { product_id } = useParams();
  const { products, currency, addToCard } = useContext(ShopContext);
  const [product, setProduct] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const fetchProduct = async () => {
    products.map((item) => {
      if (item._id === product_id) {
        setProduct(item);
        setImage(item.image[0])
        return null;
      }
    })
  }
  useEffect(() => {
    fetchProduct();
  }, [product_id, products])
  return product ? (
    <div className='opacity-100 border-t-2 pt-10 transition-opacity ease-in duration-500'>

      <div className='flex gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 md:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {product.image.map((item, index) => (
              <img onClick={() => setImage(item)} className='w-[24%] sm:w-full cursor-pointer sm:mb-3 flex-shrink-0' key={index} src={item} alt="" />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        <div className='flex-1'>
          <h1 className='text-2xl font-medium mt-2'>{product.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{product.price} {currency}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{product.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                product.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} className={`border- py-2 px-4 bg-gray-100 cursor-pointer ${size === item ? 'bg-orange-500 text-white' : ''}`} key={index}>{item}</button>
                ))
              }
            </div>
          </div>
          <button onClick={() => addToCard(product._id, size)} className='text-sm py-3 px-8 bg-black cursor-pointer text-white active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
              <p>100% Original Product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the internet. It serves as a virtual marketplace where businesses showcase their products, allowing customers to browse, select, and purchase from the comfort of their homes with secure payment options and reliable delivery.</p>
          <p>Our platform is designed to provide a seamless shopping experience with an intuitive interface and easy navigation. We prioritize your convenience by offering smart filters, high-quality product visuals, and a personalized approach to help you find exactly what you need in just a few clicks.</p>
        </div>
      </div>
      <RelatedProducts category={product.category} subCategory={product.subCategory} />
    </div>
  ) : (
    <div className='opacity-0'></div>
  )
}

export default product