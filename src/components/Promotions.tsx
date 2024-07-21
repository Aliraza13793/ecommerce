"use client"
import Image from 'next/image'
import React from 'react'
import sale2 from '../components/Assets/Images/sale2.jpeg'
import sale3 from '../components/Assets/Images/sale3.jpeg'
import sale4 from '../components/Assets/Images/sale4.jpeg'


function Promotions() {
  return (
    <div className='mt-20'>
        <div className='flex justify-center  text-blue-700 font-bold mb-2'> PROMOTIONS</div>
        <div className='flex justify-center text-4xl font-bold'>Our Promotions Events</div>
        <div className='max-w-[1220px] mx-auto grid md:grid-cols-3 gap-2 mt-6'>
        
        <div className='h-[400px] my-4 rounded text-center items-center'>
          <Image src={sale3} alt='' width={ 400} height={550}/>
        </div>
        <div className='h-[400px] my-4 rounded text-center items-center'>
          <Image src={sale2} alt='' width={ 550} height={550}/>
        </div>
        <div className='h-[400px] my-4 rounded text-center items-center'>
          <Image src={sale4} alt='' width={ 550} height={550}/>
        </div>

        </div>
          
    </div>
  )
}

export default Promotions