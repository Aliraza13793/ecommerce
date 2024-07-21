"use client"
import React, {useState } from 'react'
import './Navbar.css'
import Image from 'next/image'
import shoppingbag from '../Assets/Images/shoppingbag.png'
import strolly from '../Assets/Images/strolly.jpg'
import Link from 'next/link'

function Navbar() {
  const [menu, setMenu]= useState("dinemarket")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <Image src={shoppingbag} alt='' width={70} height={70}/>
            <p onClick={()=>{setMenu("dinemarket")}}><Link href="/">Dine Market</Link></p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("mens")}}><Link href={"/category/mens"}>Men </Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link href={"/category/womens"}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link href={"/category/kids"}> Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("allproducts")}}><Link href={"/AllProducts"}>All Products</Link>{menu==="allproducts"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-searcbar'>
        <input type="search" placeholder='What are you looking for' className='bg-gray-600 hover:bg-red-300 active:bg-red-600 focus:outline-none focus:ring focus:ring-gray-300 rounded-full h-10 w-19 p-3' />
            <Link href='/cart'><Image  className='rounded-full' src={strolly} alt='' width={70} height={70}/></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar;