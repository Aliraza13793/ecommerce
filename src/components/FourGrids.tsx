"use client"
import React from 'react'
import Image from 'next/image'
import wtwehave4 from '../components/Assets/Images/wtwehave4.webp'
import Link from 'next/link'

function FourGrids() {
  return (
    <div className='py-12 md:py-20 lg:py-[100px] px-4'>
    <div className='max-w-[1220px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
        <div className='my-3 rounded text-center lg:mt-20'>
            <div className='text-start font-bold text-xl md:text-2xl'> Using Good Quality Materials
             </div>
            <p className='text-start mt-3 text-gray-400 text-sm md:text-base'>Lorem lpsum is simply loren Lpsum is simply dummy text.</p>
            <div className='text-start font-bold text-xl md:text-2xl mt-8 md:mt-14'> Modern Fashion Design
             </div>
            <p className='text-start mt-3 text-gray-400 text-sm md:text-base'>Lorem lpsum is simply loren Lpsum is simply dummy text.</p>

        </div>
        <div className='my-3 rounded text-center lg:mt-20'>
            <div className='text-start font-bold text-xl md:text-2xl'> 100% Handmade Product
             </div>
            <p className='text-start mt-3 text-gray-400 text-sm md:text-base'>Lorem lpsum is simply loren Lpsum is simply dummy text.</p>
            <div className='text-start font-bold text-xl md:text-2xl mt-8 md:mt-14'> Discount for Bulk Orders
             </div>
            <p className='text-start mt-3 text-gray-400 text-sm md:text-base'>Lorem lpsum is simply loren Lpsum is simply dummy text.</p>

        </div>

        <div className='my-3 rounded text-center lg:mt-20'>
           <div className='text-center flex justify-center'>
           <Image src={wtwehave4} alt='' width={450} height={550} className='w-full h-auto max-w-[450px]'/>

            </div>


    </div>
    <div className='my-3 rounded text-center lg:mt-20'>

            <h1 className='text-start mt-6 md:mt-12 text-gray-700 text-sm md:text-base'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</h1>
            <button className='w-full sm:w-[60%] md:w-[40%] bg-black text-white rounded p-2 md:p-3 mt-6 md:mt-10 mb-4 hover:bg-gray-800 transition-colors'><Link href="/AllProducts">All Products</Link></button>
        </div>
    </div>
    </div>
  )
}

export default FourGrids