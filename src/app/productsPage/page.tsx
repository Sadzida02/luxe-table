import Image from 'next/image'
import React from 'react'
import Poster from '@/components/Poster'

function page() {
  return (

    <div className="px-4 md:px-8 lg:px-16 pt-28">
       <Poster />

      
    </div>
  )
}

export default page

/*export default function ProductList ( {products}) {
  return (
    <div className='pt-32 h-full'>
        <ul>
          {products.map((product) => (
            <div>{product.name}</div>
          ))}
        </ul>
      
    </div>
  )

  
}
export async function getStaticProps()  {
  const res = await fetch('http://localhost:4001/products');
  const products = await res.json()
  return { 
    props: { products }, 
  };
};*/
