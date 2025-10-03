"use client"
import React, {useState } from 'react'
import Image from 'next/image'
import shoppingbag from '../Assets/Images/shoppingbag.png'
import strolly from '../Assets/Images/strolly.jpg'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'

function Navbar() {
  const [menu, setMenu]= useState("dinemarket")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { getCartCount } = useCart()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleMenuClick = (menuItem: string) => {
    setMenu(menuItem)
    setMobileMenuOpen(false)
  }

  return (
    <nav className='w-full bg-white shadow-md sticky top-0 z-50'>
      <div className='max-w-[1400px] mx-auto px-4 py-3 md:py-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-2 md:gap-3'>
            <Image src={shoppingbag} alt='Dine Market Logo' width={50} height={50} className='w-10 h-10 md:w-14 md:h-14'/>
            <Link href="/" onClick={()=>{setMenu("dinemarket")}} className='text-lg md:text-2xl lg:text-3xl font-semibold text-gray-800 hover:text-gray-600 transition-colors whitespace-nowrap'>
              Dine Market
            </Link>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex items-center gap-8 xl:gap-12'>
            <li onClick={()=>{setMenu("mens")}} className='relative cursor-pointer'>
              <Link href={"/category/mens"} className='text-gray-600 hover:text-gray-900 font-medium transition-colors'>Men</Link>
              {menu==="mens" && <div className='absolute bottom-[-8px] left-0 w-full h-[3px] bg-red-500 rounded-full'></div>}
            </li>
            <li onClick={()=>{setMenu("womens")}} className='relative cursor-pointer'>
              <Link href={"/category/womens"} className='text-gray-600 hover:text-gray-900 font-medium transition-colors'>Women</Link>
              {menu==="womens" && <div className='absolute bottom-[-8px] left-0 w-full h-[3px] bg-red-500 rounded-full'></div>}
            </li>
            <li onClick={()=>{setMenu("kids")}} className='relative cursor-pointer'>
              <Link href={"/category/kids"} className='text-gray-600 hover:text-gray-900 font-medium transition-colors'>Kids</Link>
              {menu==="kids" && <div className='absolute bottom-[-8px] left-0 w-full h-[3px] bg-red-500 rounded-full'></div>}
            </li>
            <li onClick={()=>{setMenu("allproducts")}} className='relative cursor-pointer'>
              <Link href={"/AllProducts"} className='text-gray-600 hover:text-gray-900 font-medium transition-colors'>All Products</Link>
              {menu==="allproducts" && <div className='absolute bottom-[-8px] left-0 w-full h-[3px] bg-red-500 rounded-full'></div>}
            </li>
        </ul>

        {/* Desktop Search & Cart */}
        <div className='hidden lg:flex items-center gap-4'>
            <div className='relative'>
              <input
                type="search"
                placeholder='Search products...'
                className='bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full h-10 w-48 xl:w-64 px-4 pr-10 text-sm transition-all'
              />
              <AiOutlineSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl' />
            </div>
            <Link href='/cart' className='relative'>
                <Image className='rounded-full w-12 h-12 hover:opacity-80 transition-opacity' src={strolly} alt='Cart' width={48} height={48}/>
                {getCartCount() > 0 && (
                  <div className='absolute -top-2 -right-2 min-w-[20px] h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-semibold px-1'>
                    {getCartCount()}
                  </div>
                )}
            </Link>
        </div>

        {/* Mobile Cart and Menu Icons */}
        <div className='flex lg:hidden items-center gap-3'>
            <Link href='/cart' className='relative'>
                <Image className='rounded-full w-10 h-10' src={strolly} alt='Cart' width={40} height={40}/>
                {getCartCount() > 0 && (
                  <div className='absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-semibold px-1'>
                    {getCartCount()}
                  </div>
                )}
            </Link>
            <button
              onClick={toggleMobileMenu}
              className='text-2xl text-gray-800 z-50 p-1'
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
                {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 w-[75%] max-w-[300px] h-full bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden overflow-y-auto`}>
            <div className='p-6 pt-20'>
              <ul className='flex flex-col gap-6'>
                <li onClick={()=>{handleMenuClick("mens")}} className='border-b border-gray-200 pb-3'>
                    <Link href={"/category/mens"} className='text-lg font-medium text-gray-800 block'>Men</Link>
                    {menu==="mens" && <div className='mt-2 h-1 w-16 bg-red-500 rounded'></div>}
                </li>
                <li onClick={()=>{handleMenuClick("womens")}} className='border-b border-gray-200 pb-3'>
                    <Link href={"/category/womens"} className='text-lg font-medium text-gray-800 block'>Women</Link>
                    {menu==="womens" && <div className='mt-2 h-1 w-16 bg-red-500 rounded'></div>}
                </li>
                <li onClick={()=>{handleMenuClick("kids")}} className='border-b border-gray-200 pb-3'>
                    <Link href={"/category/kids"} className='text-lg font-medium text-gray-800 block'>Kids</Link>
                    {menu==="kids" && <div className='mt-2 h-1 w-16 bg-red-500 rounded'></div>}
                </li>
                <li onClick={()=>{handleMenuClick("allproducts")}} className='border-b border-gray-200 pb-3'>
                    <Link href={"/AllProducts"} className='text-lg font-medium text-gray-800 block'>All Products</Link>
                    {menu==="allproducts" && <div className='mt-2 h-1 w-16 bg-red-500 rounded'></div>}
                </li>
              </ul>

              {/* Mobile Search */}
              <div className='mt-8'>
                <div className='relative'>
                  <input
                    type="search"
                    placeholder='Search products...'
                    className='bg-gray-100 w-full rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm'
                  />
                  <AiOutlineSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl' />
                </div>
              </div>
            </div>
        </div>

        {/* Overlay */}
        {mobileMenuOpen && (
            <div
                className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'
                onClick={toggleMobileMenu}
            ></div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
