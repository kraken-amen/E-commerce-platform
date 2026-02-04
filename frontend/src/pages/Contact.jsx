import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT '} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col gap-6 items-start justify-center'>
          <p className='font-semiblod text-xl text-gray-600'>Our store</p>
          <p className='text-gray-500'>1191 Naassen tunsia <br /> hay il basma 14</p>
          <p className='text-gray-500'>Tel:425444444 <br /> Email: fov@gmail.com</p>
          <p className='font-semiblod text-xl text-gray-600'>Carees at forever</p>
          <p className='text-gray-500'>learn more about our teams and job openings</p>
          <button className='cursor-pointer border borde-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore job</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact