import React from 'react'
import Image from 'next/image'
import { MdArrowCircleRight } from "react-icons/md";

function Banner() {
  return (
    <div>
        <div className=' text-3xl mt-16 text-medium flex justify-center w-full text-olive'>
            <p>You deserve the best and most aesthetic dishes in your home...</p>
        </div>
        <hr  className='text-slate-800 my-20'/>
        <div className='text-4xl text-medium flex flex-col my-5 items-center justify-center w-full text-olive tracking-widest'>
            <div className='flex'>
                <a href="">SHOP NOW</a>
                <MdArrowCircleRight />
            </div>
            
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="bg-gray-100 p-4 flex flex-col">
                <Image  
                src="/plates.jpg"
                width={400}
                height={350}
                alt="plates" />
                <a href="" className='bg-transparent border-[1px] border-solid border-olive text-olive text-3xl font-medium p-2 py-2'>Plates</a>
            </div>
            <div className="bg-gray-100 p-4 flex flex-col">
                <Image  
                src="/glasses.jpg"
                width={400}
                height={350}
                alt="plates" />
                <a href="" className='bg-transparent border-[1px] border-solid border-olive text-olive text-3xl font-medium p-2 py-2'>Glasses</a>
            </div>
            <div className="bg-gray-100 p-4 flex flex-col">
                <Image  
                src="/utensils.jpg"
                width={400}
                height={350}
                alt="plates" />
                <a href="" className='bg-transparent border-[1px] border-solid border-olive text-olive text-3xl font-medium p-2 py-2'>Utensils</a>
            </div>
        </div>
        
      
    </div>
  )
}

export default Banner
