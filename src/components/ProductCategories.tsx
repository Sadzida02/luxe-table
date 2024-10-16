import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { MdArrowCircleRight } from "react-icons/md";

function ProductCategories() {
  return (
    <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap md:px-8 lg:px-16 my-10'>       
        
            <Link href="" className="bg-gray-100 p-4 flex flex-col gap-4 sm:w-[90%] md:w-[40%] lg:w-[30%] hover:animate-pulse">
                <Image  
                src="/plates.jpg"
                width={400}
                height={350}
                alt="plates" />
                <a href="" className='bg-transparent border-[1px] border-solid border-olive text-olive text-3xl font-medium p-2 py-2'>Dinner Sets</a>
            </Link>
            <Link href="/" className="bg-gray-100 p-4 flex flex-col gap-4 sm:w-[90%] md:w-[40%] lg:w-[30%] hover:animate-pulse">
                <Image  
                src="/glasses.jpg"
                width={400}
                height={350}
                alt="plates" />
                <a href="" className='bg-transparent border-[1px] border-solid border-olive text-olive text-3xl font-medium p-2 py-2'>Glasses</a>
            </Link>
            <Link href="7" className="bg-gray-100 p-4 flex flex-col gap-4 sm:w-[90%] md:w-[40%] lg:w-[30%] hover:animate-pulse">
                <Image  
                src="/utensils.jpg"
                width={400}
                height={350}
                alt="plates" />
                <a href="" className='bg-transparent border-[1px] border-solid border-olive text-olive text-3xl font-medium p-2 py-2'>Utensils</a>
            </Link>
            <Link href="7" className="bg-gray-100 p-4 flex flex-col gap-4 sm:w-[90%] md:w-[40%] lg:w-[30%] hover:animate-pulse">
                <Image  
                src="/pots.jpg"
                width={400}
                height={350}
                alt="plates" />
                <a href="" className='bg-transparent border-[1px] border-solid border-olive text-olive text-3xl font-medium p-2 py-2'>Pots and Pans</a>
            </Link>
            <Link href="7" className="bg-gray-100 p-4 flex flex-col gap-4 sm:w-[90%] md:w-[40%] lg:w-[30%] hover:animate-pulse">
                <Image  
                src="/tablecloth.jpg"
                width={400}
                height={350}
                alt="plates" />
                <a href="" className='bg-transparent border-[1px] border-solid border-olive text-olive text-3xl font-medium p-2 py-2'>Table Decor</a>
            </Link>
            <Link href="7" className="bg-gray-100 p-4 flex flex-col gap-4 sm:w-[90%] md:w-[40%] lg:w-[30%] hover:animate-pulse">
                <Image  
                src="/organizers.jpg"
                width={400}
                height={350}
                alt="plates" />
                <a href="" className='bg-transparent border-[1px] border-solid border-olive text-olive text-3xl font-medium p-2 py-2'>Organizers</a>
            </Link>
           
        
      
    </div>
  )
}

export default ProductCategories
