import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <div className='flex'>
        <div className=' bg-olive text-left px-8 flex flex-col justify-center w-1/4 '>
            <p className='text-white lg:text-6xl sm:text-2xl  mb-4'>The best, <span className='shadow-glow text-[#e8d089] '>premium</span> tableware out here!</p>
            <a href="#" className='bg-transparent border-2 border-solid border-white text-white font-medium px-2 py-2 w-fit'>View more</a>
        </div>
        <div className='w-3/4'>
            <Image  
            src="/hero3.jpg"
            width={1100}
            height={450}
            objectFit="cover"
            alt="Home page" />

        </div>
        
      
    </div>
  )
}

export default Hero
