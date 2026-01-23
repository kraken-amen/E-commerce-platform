import React from 'react'
import assets from '../assets/frontend_assets/logo.png'
function Navbar() {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={assets.logo}className='w-36' alt="" />
        <ul className='flex list-none gap-12 text-lg hidden md:flex'>
            <li>Home</li>
            <li>Product</li>
            <li>Collection</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

    </div>
  )
}

export default Navbar