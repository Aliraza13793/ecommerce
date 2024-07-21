"use client"
import React from 'react';
import { Productss } from '@/utils/mocks';
import Image, { StaticImageData } from 'next/image';
import wtwehave1 from '@/components/Assets/Images/wtwehave1.png';
import wtwehave2 from '@/components/Assets/Images/wtwehave2.png';
import wtwehave3 from '@/components/Assets/Images/wtwehave3.png';
import All3 from '@/components/Assets/Images/All3.png';
import All from '@/components/Assets/Images/All.png';
import All1 from '@/components/Assets/Images/All1.png';
import All2 from '@/components/Assets/Images/All2.png';
import All4 from '@/components/Assets/Images/All4.png';
import kids1 from '@/components/Assets/Images/kids1.jpeg';
import kids2 from '@/components/Assets/Images/kids2.jpeg';
import kids5 from '@/components/Assets/Images/kids5.webp';
import kids7 from '@/components/Assets/Images/kids7.jpg';
import wtwehave5 from '@/components/Assets/Images/wtwehave5.jpg';
import wtwehave6 from '@/components/Assets/Images/wtwehave6.jpeg';
import wtwehave7 from '@/components/Assets/Images/wtwehave7.jpeg';
import wtwehave8 from '@/components/Assets/Images/wtwehave8.webp';
import ProductsCart from '@/components/ProductsCart';

function AllProducts() {
  return (
    <div className=" max-w-[1220px] mx-auto grid md:grid-cols-4 mt-6 gap-3">
      {
          Productss.map((product)=>(
            <ProductsCart key={product.id} title={product.name} price={product.price} img={product.image as StaticImageData} category={product.category} id={product.id}/>))
        }
      
      {/* <div className="max-w-[1140px] mx-auto flex md:flex-auto justify-around gap-6">
        
      <div className='flex  flex-wrap h-[350px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          
          {/* <Image src={wtwehave1} alt='' width={350} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Black Sweat Shirt</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 195$</h1>
        </div>
        <div className='h-[350px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={wtwehave2} alt='' width={350} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Long Coat</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 185$</h1>
        </div>
        <div className='h-[350px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={wtwehave3} alt='' width={350} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Gray Sweat Shirt</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 295$</h1>
        </div>
        <div className='h-[350px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={All3} alt='' width={350} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>White Hoddy Shirt</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 210$</h1>
        </div>


      </div>
      <div className="max-w-[1140px] mx-auto flex md:flex-auto justify-around gap-6 mt-14">
      <div className='h-[350px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={All1} alt='' width={350} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Imp Trouser </div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 195$</h1>
        </div>
        <div className='h-[350px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={All} alt='' width={350} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Tea Pink Trouser</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 187$</h1>
        </div>
        <div className='h-[350px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={All2} alt='' width={350} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Light Blue Trouser</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 146$</h1>
        </div>
        <div className='h-[350px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={All4} alt='' width={350} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Sleveless Shirt</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 110$</h1>
        </div>


      </div>
      <div className="max-w-[1140px] mx-auto flex md:flex-auto justify-around gap-6 mt-14">
      <div className='h-[363px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={kids1} alt='' width={363} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Green Baby Shirt</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 295$</h1>
        </div>
        <div className='h-[363px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={kids2} alt='' width={363} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Baby long Shirt</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 121$</h1>
        </div>
        <div className='h-[267px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={kids5} alt='' width={267} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Boys Shirt</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 195$</h1>
        </div>
        <div className='h-[320px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={kids7} alt='' width={320} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Boys Pent Coat</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 379$</h1>
        </div>


      </div>
      <div className="max-w-[1140px] mx-auto flex md:flex-auto justify-around gap-6 mt-14 mb-48">
      <div className='h-[359px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={wtwehave5} alt='' width={359} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Mens Shirt</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 195$</h1>
        </div>
        <div className='h-[350px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={wtwehave6} alt='' width={350} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Mens Shirt</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 230$</h1>
        </div>
        <div className='h-[350px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={wtwehave7} alt='' width={350} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Mens White Shirt</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 195$</h1>
        </div>
        <div className='h-[338px] my-4 hover:scale-105 duration-300 rounded text-center items-center'>
          <Image src={wtwehave8} alt='' width={338} height={350}/>
          <div className='flex justify-center mt-6 font-bold '>Mens Shirt</div>
          <h1 className=' flex justify-center mt-3 font-bold'>Price 195$</h1> 
        </div>
 

      </div>*/}
      

    </div>
  )
}

export default AllProducts