"use client"
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AllProducts from "./AllProducts/page";
import Hero from "@/components/Hero/Hero";
import Promotions from "@/components/Promotions";
import Products from "@/components/Products";
import UniqueAut from "@/components/Unique&Aut";
import FourGrids from "@/components/FourGrids";
import Newsletter from "@/components/Newsletter";
 export default function MainPage(){
  return(
    <div>
     
      
      <Hero/>
      <Promotions/>
      <Products/>
      <UniqueAut/>
      <FourGrids/>   
      <Newsletter/>
    
       
      
      
    </div>
  )
 }