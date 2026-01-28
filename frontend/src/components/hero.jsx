import React from 'react'

function hero() {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font -meduim text-sm md:text-base'>OUR BESTSELLERS</p>
            </div>
        </div>
    </div>
  )
}

export default hero