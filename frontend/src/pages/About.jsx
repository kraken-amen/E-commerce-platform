import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col gap-6 justify-center md:w-2/4 text-gray-600'>
          <p>Every great brand starts with a problem. Ours started with a simple observation: we live in a world that moves too fast. We are surrounded by "fast fashion," disposable gadgets, and trends that disappear as quickly as they arrive. We realized that the "feeling" of something new was being replaced by the "exhaustion" of things constantly breaking or going out of style.Forever was born from a desire to slow down.</p>
          <p>Our Humble BeginningsIt started in a small room with a big idea. We wanted to create a space where quality isn't a luxury, but a standard. We spent months searching for creators and suppliers who shared our obsession with detail. We didn't want to sell things you’d throw away in a month; we wanted to provide the pieces that become a part of your life story—the jacket you wear for a decade, the watch you pass down, or the decor that turns a house into a home.</p>
          <b className='text-gray-700'>Our Mission</b>
          <p>Our mission is simple: to bring you products that last. We believe that the best things in life aren't disposable. They are the items that tell a story, the ones that age gracefully, and the ones that make you feel good every time you use them. We are committed to quality, sustainability, and creating a shopping experience that feels personal and intentional.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border-gray-300 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We stand behind every product we sell. Our quality assurance process ensures that every item meets our high standards for durability, functionality, and design. You can shop with confidence, knowing that you're investing in products that are built to last.</p>
        </div>
        <div className='border-gray-300 border-t border-b px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>In a world that never stops, we bring the store to you. No more rushing through crowded malls or searching endlessly for parking. Our platform is designed to make shopping simple, fast, and enjoyable. Whether you're at home, at work, or on the go, your next favorite item is just a click away.</p>
        </div>
        <div className='border-gray-300 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We believe that shopping should be an experience, not a chore. Our team is dedicated to providing you with the best possible customer service. From helping you find the perfect product to answering your questions, we're here to help you every step of the way.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About