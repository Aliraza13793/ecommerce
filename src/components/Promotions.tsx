"use client"
import Image from 'next/image'
import React from 'react'
import sale2 from '../components/Assets/Images/sale2.jpeg'
import sale3 from '../components/Assets/Images/sale3.jpeg'
import sale4 from '../components/Assets/Images/sale4.jpeg'


function Promotions() {
  return (
    <div className='mt-12 md:mt-20 px-4'>
        <div className='flex justify-center text-blue-700 font-bold mb-2 text-sm md:text-base'> PROMOTIONS</div>
        <div className='flex justify-center text-2xl md:text-4xl font-bold text-center'>Our Promotions Events</div>
        <div className='max-w-[1220px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-6'>

        <div className='my-4 rounded text-center items-center overflow-hidden'>
          <Image src={sale3} alt='' width={400} height={550} className='w-full h-auto'/>
        </div>
        <div className='my-4 rounded text-center items-center overflow-hidden'>
          <Image src={sale2} alt='' width={550} height={550} className='w-full h-auto'/>
        </div>
        <div className='my-4 rounded text-center items-center overflow-hidden sm:col-span-2 md:col-span-1'>
          <Image src={sale4} alt='' width={550} height={550} className='w-full h-auto'/>
        </div>

        </div>

    </div>
  )
}

export default Promotions