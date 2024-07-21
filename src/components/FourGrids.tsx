"use client"
import React from 'react'
import Image from 'next/image'
import wtwehave4 from '../components/Assets/Images/wtwehave4.webp'
import Link from 'next/link'

function FourGrids() {
  return (
    <div className='py-[100px]'> 
    <div className='max-w-[1220px] mx-auto grid md:grid-cols-4 gap-6'>
        <div className=' h-[450px] my-3 rounded text-center mt-20'>
            <div className='text-start font-bold text-2xl'> Using Good Quality Materials
             </div>
            <p className=' text-start mt-3 text-gray-400'>Lorem lpsum is simply loren Lpsum is simply dummy text.</p>
            <div className='text-start font-bold text-2xl mt-14'> Modern Fashion Design
             </div>
            <p className=' text-start mt-3 text-gray-400'>Lorem lpsum is simply loren Lpsum is simply dummy text.</p>         

        </div>
        <div className=' h-[450px] my-3 rounded text-center mt-20'>
            <div className='text-start font-bold text-2xl'> 100% Handmade Product
             </div>
            <p className=' text-start mt-3 text-gray-400'>Lorem lpsum is simply loren Lpsum is simply dummy text.</p>
            <div className='text-start font-bold text-2xl mt-14'> Discount for Bulk Orders
             </div>
            <p className=' text-start mt-3 text-gray-400'>Lorem lpsum is simply loren Lpsum is simply dummy text.</p>         

        </div>
       
        <div className='h-[450px] my-3 rounded text-center mt-20'> 
           <div className='text-center '> 
           <Image src={wtwehave4} alt='' width={450} height={550}/>
          
            </div>
            

    </div>
    <div className=' h-[450px] my-3 rounded text-center mt-20'>
            
            <h1 className=' text-start mt-12 text-gray-700'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</h1>  
            <button className=' w-[40%] bg-black text-white rounded p-2 mt-10 mb-4'><Link href="/AllProducts">All Products</Link></button>
        </div>
    </div>
    </div>
  )
}

export default FourGrids