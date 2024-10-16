
import React from 'react'

function page() {
  return (
    <div className='pt-32'>
        <p>Product Page</p>
      
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
