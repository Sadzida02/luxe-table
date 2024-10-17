import React from 'react'
import Image from 'next/image'
import { FaShoppingCart, FaStar } from 'react-icons/fa'

async function getProduct(id) {
    const response = await fetch('http://localhost:4001/products/' + id, {
        next: {
            revalidate: 60
        }
    })
    return response.json()
  }
  

async function ProductDetails({params}) {
    const product = await getProduct(params.id)
    return (
      <div className=' w-full lg:flex justify-between py-28 px-4 md:px-16 lg:px-44'> 
        <div className='lg:w-1/2 w-full'>
          <h2 className='text-2xl font-bold pt-10 text-olive'>PRODUCT DETAILS</h2>
          <div className='text-xl text-slate-400 py-3'>{product.category}</div>
          <div className='text-4xl font-bold text-olive
          py-3'>{product.name}</div>
  
          <div className='pb-3 flex flex-col'>
            <div className='flex'>
            <span className='text-sm'>Rating:</span>
              <div className='flex pl-2'>
              <FaStar className='text-oker'/>
              <FaStar className='text-oker'/>
              <FaStar className='text-oker'/>
              <FaStar className='text-oker'/>
              <FaStar className='text-olive'/>
              </div>
            </div>    
            <p className='flex-wrap text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis reiciendis aut explicabo. Hic facere, incidunt perferendis quibusdam saepe inventore nulla, dolorem vero veritatis ipsa deserunt ipsam earum, vel ullam eveniet!</p>
          <div className='inline pt-5'>
          <span>Qauntity</span>
          <select className=" ml-3 bg-olive text-white pl-3 py-1 w-[70px] inline" name="category" id="category ">
                          <option selected>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </select> 
          </div>
          
          <div className='flex justify-end'>
          <div className='inline py-3'>
              <span>Priced at:  </span>
              <span className='text-myBrown text-[30px]'>{product.price}</span>
              <button className="flex bg-oker justify-center hover:bg-[#9E5C25] py-2 px-4 text-white text-lg w-max">
              <FaShoppingCart className="inline w-5 pt-1 pl-1"/>&nbsp; Add to cart</button> 
          </div>
          </div>
          
                      
          
              
        </div>
        
        </div>
        
        
        <div className='flex items-center justify-center w-full lg:w-1/2'>
          <Image className='rounded-lg shadow-xl'
              src={product.image}
              alt={product.name}
              width={400}
              height={450}
              style={{ objectFit: 'cover'}}/>
          </div>
      
      </div>    
  )
}

export default ProductDetails
