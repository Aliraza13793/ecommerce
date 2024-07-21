import { Productss } from "@/utils/mocks"
import ProductsCart from "@/components/ProductsCart"
import { StaticImageData } from "next/image"
const getProductsByCategory=(category:string)=>{
 return Productss.filter((product)=>product.category===category);

}
export default function Page({ params }: { params: { slug: string } }) {
  const result=getProductsByCategory(params.slug);
    return <div className=' max-w-[1220px] mx-auto grid md:grid-cols-3 mt-6 gap-3 '>
      {
        result.length>0 ? result.map((product)=>(
            <ProductsCart key={product.id} title={product.name} price={product.price} img={product.image as StaticImageData} category={product.category} id={product.id}/>)) :<p>No Products found</p>
        }
     
         
    </div>
   
  }