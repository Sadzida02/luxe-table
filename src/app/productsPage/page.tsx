import React from 'react'
import Poster from '@/components/Poster'
import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'

function page() {
  return (

    <div className="px-4 md:px-8 lg:px-16 pt-28">
       <Poster />
       <h1 className='mt-12 text-xl font-semibold text-olive '>Specially for you!</h1>
       <Filter />
       <ProductList/>
       
      
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
