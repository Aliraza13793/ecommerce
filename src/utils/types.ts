import { StaticImageData } from "next/image";

export type Product={
    id:number;
    name:string;
    price:number;
    category:string;
    image:string | StaticImageData;
    title:string;
}

export type CartItem = {
    id: number;
    name: string;
    price: number;
    image: string | StaticImageData;
    size: string;
    quantity: number;
    category: string;
    title: string;
}