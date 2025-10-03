"use client"
import { Productss } from "@/utils/mocks"
import Image,{ StaticImageData } from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"
import { useState } from "react"


const getProductsDetail=(id:number | string)=>{
 return Productss.filter((product) => product.id==id);

};
const sizes=["xs","sm","md","lg","xl"];
export default function Page({ params }: { params: { id: string } }) {
 const result=getProductsDetail(params.id);
 const { addToCart } = useCart();
 const [selectedSize, setSelectedSize] = useState<string>("md");
 const [quantity, setQuantity] = useState<number>(1);
 const [addedToCart, setAddedToCart] = useState(false);

 const handleAddToCart = (product: typeof result[0]) => {
   addToCart({
     id: product.id,
     name: product.name,
     price: product.price,
     image: product.image,
     size: selectedSize,
     quantity: quantity,
     category: product.category,
     title: product.title,
   });
   setAddedToCart(true);
   setTimeout(() => setAddedToCart(false), 2000);
 };

    return <div className='max-w-[1220px] mx-auto px-4 md:px-6 mt-8 md:mt-16 py-6 md:py-10'>

        {
          result.map((product) => (
            <div key={product.id} className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
              <div className='w-full md:w-1/2 flex justify-center'>
                <Image src={product.image} alt={product.name} className='w-full h-auto max-w-[500px] rounded-lg'/>

              </div>

              <div className="w-full md:w-1/2">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{product.name}</h1>
              <h2 className="text-sm md:text-base font-semibold text-gray-400 mt-2">{product.title}</h2>
              <p className="text-2xl md:text-3xl font-bold mt-4">${product.price}</p>


              <div>
                <h3 className="mt-6 md:mt-8 text-xs md:text-sm font-semibold">SELECT SIZE</h3>
             <div className="flex gap-2 md:gap-4 flex-wrap">   {
                  sizes.map((item)=>{

                    return (
                      <div
                        key={item}
                        onClick={() => setSelectedSize(item)}
                        className={`flex justify-center items-center w-10 h-10 md:w-12 md:h-12 duration-300 border rounded-full hover:bg-green-400 mt-2 cursor-pointer ${
                          selectedSize === item ? 'bg-green-400' : ''
                        }`}>
                  <span className="text-sm md:text-base font-semibold text-center text-gray-600 uppercase">{item}</span>
                </div>

                    )
                  })
                }
                </div>
                <div className="flex gap-x-3 mt-6 md:mt-8 items-center">
                  <h3 className="text-sm md:text-base font-semibold">Quantity:</h3>
                  <div className='flex gap-x-2 items-center'>
                    <button
                      className='border bg-green-400 h-8 w-8 md:h-10 md:w-10 rounded-full flex justify-center items-center hover:bg-green-500 transition-colors'
                      onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
                    >
                      -
                    </button>
                    <span className='w-8 md:w-10 text-center font-semibold'>{quantity}</span>
                    <button
                      className='border h-8 w-8 md:h-10 md:w-10 bg-green-400 rounded-full flex justify-center items-center hover:bg-green-500 transition-colors'
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  </div>
                <div>
                <Button
                  className="mt-6 md:mt-8 w-full md:w-auto px-8 py-3 text-base"
                  variant="outline"
                  onClick={() => handleAddToCart(product)}
                >
                  {addedToCart ? "Added! ✓" : "Add to Cart"}
                </Button>
                  </div>

              </div>

              </div>

              </div>
          ))
        }


    </div>

  }