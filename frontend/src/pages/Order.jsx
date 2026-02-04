import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
const Order = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className='pt-16 border-t'>
      <div className='text-2xl'>
        <Title text1={'MY '} text2={'ORDER'} />

      </div>
      <div>
        {
          products.slice(1, 4).map((product, index) => (
            <div className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center gap-4 md:justify-between' key={index}>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={product.image[0]} alt="" />
                <div>
                  <p className='font-medium sm:text-base'>{product.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg'>{product.price} {currency}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Size: {product.size}</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'>2022-01-01</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to ship</p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm cursor-pointer'>Track Order</button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Order