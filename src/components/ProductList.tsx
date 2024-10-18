'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCartShopping } from "react-icons/fa6";

async function getProducts() {
    const response = await fetch('http://localhost:4001/products', {
         next: {
              revalidate: 0
          }
     })
      return response.json()
  }

async function ProductList() {
    const products = await getProducts()
  return (
    <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap md:px-8 lg:px-16 my-10'> 
    
     {products.map((product) => (
        <Link href={`../productsPage/${product.id}`} key={product.id} className="bg-gray-100 p-2 flex flex-col full gap-4 sm:w-[45%] lg:w-[22%]">
        <Image  
        src={product.image}
        width={250}
        height={250}
        alt={product.name}/>

        <div className='flex flex-col justify-around'>
            <div className='flex flex-col'>
            <span className='text-[10px]'>{product.category}</span>
            <div className='flex justify-between gap-4'>
            <h3 className='bg-transparent text-olive text-2xl font-medium'>{product.name}</h3>
            <p className='font-extrabold text-2xl'>{product.price}</p>
            
            </div>
            <p className='text-sm mb-2'>{product.description}</p>
            </div>
            
            
            
            <button className=" bg-oker text-white w-max py-1 px-3 flex items-center text-md gap-1 hover:bg-opacity-50 mb-1">Add to cart<FaCartShopping/></button>
        </div>
        
    </Link>
     ))}
        
        
        

      
    </div>
  )
}

export default ProductList


  

