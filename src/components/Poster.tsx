import React from 'react'
import Image from 'next/image'

function Poster() {
  return (
        <div className=" bg-gray-200 px-10 sm:flex  h-max">
            <div className="w-2/3 flex flex-col justify-center gap-8 leading-[48px] text-oker text-center items-center">
                <h1 className="text-4xl font-semibold">
                 <span className='text-6xl gont-extrabold'>50%</span> discount on all dining sets  <br />until the end of october!!!
                </h1>
                <p className='text-2xl'>Don't miss on this amazing opportunity!</p>

                <button className=" bg-oker text-white w-max py-2 px-3 text-lg">
                    BUY NOW
                </button>

            </div>

            <Image 
            src='/posterPng.png'
            width={480}
            height={350}
            alt='plates'
            objectFit='true'/>

            
      </div>
  )
}

export default Poster
