import { Productss } from "@/utils/mocks"
import ProductsCart from "@/components/ProductsCart"
import Image,{ StaticImageData } from "next/image"
import { Button } from "@/components/ui/button"


const getProductsDetail=(id:number | string)=>{
 return Productss.filter((product) => product.id==id);

};
const sizes=["xs","sm","md","lg","xl"];
export default function Page({ params }: { params: { id: string } }) {
 const result=getProductsDetail(params.id);
    return <div className='flex flex-wrap ml-20 mt-16 py-10 '>
       
        {
          result.map((product) => (
            <div key={product.id} className="flex justify-between gap-4 ">
              <div>
                <Image src={product.image} alt={product.name} />
                
              </div>
                     
              <div className="">
              <h1 className="text-2xl">{product.name}</h1> 
              <h2 className=" text-base font-semibold text-gray-400">{product.title}</h2>                    
               {/* <Button className="mt-8"variant="outline">Add to Cart</Button> */}
               
              <div>
                <h3 className="mt-6 text-xs font-semibold">SLECT SIZE</h3>
             <div className="flex gap-4">   {
                  sizes.map((item)=>{

                    return (
                      <div key={item}className=" flex justify-center items-center w-6 h-6 duration-300 border rounded-full hover:shadow-xl mt-2">
                  <span className="text-[10px] font-semibold text-center text-gray-600">{item}</span>
                </div>
                
                    )
                  })
                }
                </div>
                <div className="flex gap-x-3 mt-6 items-center">
                  <h3 className="text-[10px] font-semibold ">Quantity:</h3>
                  <div>1</div>
                  </div>
              </div>
              
              </div>
              
              </div>
          ))
        }
      
        
    </div>
   
  }