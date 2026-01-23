import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Product from './pages/product'
import Cart from './pages/cart'
import Login from './pages/Login'
import Order from './pages/Order'
import Placeholder from './pages/Placeholder'
import Collection from './pages/collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:product_id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/order" element={<Order />} />
      <Route path="/placeholder" element={<Placeholder />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  )
}

export default App