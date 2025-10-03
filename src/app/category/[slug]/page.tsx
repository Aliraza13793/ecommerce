"use client"
import { Productss } from "@/utils/mocks"
import ProductsCart from "@/components/ProductsCart"
import { StaticImageData } from "next/image"
const getProductsByCategory=(category:string)=>{
 return Productss.filter((product)=>product.category===category);

}
export default function Page({ params }: { params: { slug: string } }) {
  const result=getProductsByCategory(params.slug);
    return <div className='max-w-[1220px] mx-auto px-4 mt-8 md:mt-12 mb-8'>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 capitalize">{params.slug}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
      {
        result.length>0 ? result.map((product)=>(
            <ProductsCart key={product.id} title={product.name} price={product.price} img={product.image as StaticImageData} category={product.category} id={product.id}/>)) :<p className="text-center text-gray-500 text-lg col-span-full">No Products found</p>
        }


    </div>
    </div>

  }