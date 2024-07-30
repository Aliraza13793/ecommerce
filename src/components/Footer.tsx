"use client"
import React from 'react'
import {FaGithub, FaFacebook, FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <div className="">
        <div className='max-w-[1260px] mx-auto my-0 flex md:flex-auto justify-around gap-5 mt-36 mb-0 '>
            <div className='item-start font-bold h-[400px] text-gray-700'>Dine Market 
                <p className='item-start font-normal content-around text-wrap mt-3 text-gray-500'>Small, artisan label that is good for all.</p>
            <div className='inline-flex mt-7 text-4xl gap-3 justify-center'><FaGithub/>
            <FaFacebook/>
            <FaLinkedin/></div>
            </div>
            <div className='item-start font-bold text-gray-700'>Company
              <p className='item-start font-normal mt-3 text-gray-500'>About us</p>              
              <p className='item-start font-normal mt-3 text-gray-500'>Terms & Condtions</p>
              <p className='item-start font-normal mt-3 text-gray-500'>Privacy Policy</p>
              <p className='item-start font-normal mt-3 text-gray-500'>Contact Us</p>         
              

            </div>
            <div className='item-start font-bold text-gray-700'>Customer Support
              <p className='item-start font-normal mt-3 text-gray-500'>24-hr Service</p>
              <p className='item-start font-normal mt-3 text-gray-500'>Support Carrer</p>
              <p className='item-start font-normal mt-3 text-gray-500'>Return Policy</p>
              <p className='item-start font-normal mt-3 text-gray-500'>Shipping Policy</p>
              <p className='item-start font-normal mt-3 text-gray-500'>Quick Chat</p>
              
            </div>
            <div className='item-start font-bold text-gray-700'>Contact
              <p className='item-start font-normal mt-3 text-gray-500'>Wahtsapp</p>
              <p className='item-start font-normal mt-3 text-gray-500'>Facebook</p>
              <p className='item-start font-normal mt-3 text-gray-500'>Twitter</p>
              <p className='item-start font-normal mt-3 text-gray-500'>Instagram</p>
              <p className='item-start font-normal mt-3 text-gray-500'>Youtube</p>

            </div>
        </div>
        <div className='mb-2 mt-0'> <hr className='max-w-[1260px] mx-auto flex md:flex-auto justify-around  border-gray-400'/>
          <div className='flex justify-around gap-5 mb-0'>
            <div className='item-start font-bold text-gray-500'>Copyright 2024
              <p className='item-start font-normal content-around text-wrap text-gray-500'>Dine Market</p>
            </div>
            <div className='item-start font-bold text-gray-500'>Designed by:
              <p className='item-start font-normal content-around text-wrap text-gray-500'>Dine Studio</p>
            </div>
            <div className='item-start font-bold text-gray-500'>Code by:
              <p className='item-start font-normal content-around text-wrap text-gray-500'>Aliraza 13793 on Github</p>
            </div>
          </div>

        </div>
        </div>
  )
}

export default Footer;
// hello