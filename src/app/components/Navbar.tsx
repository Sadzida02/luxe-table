import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">       
            <div className="text-3xl text-olive font-medium tracking-widest">LUXEtABLE</div>
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Search" className="border px-2 py-1" />
            <button className="bg-olive text-white px-4 py-1">Log In</button>        
                <FaCartShopping className='text-olive text-2xl'/>  
            
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
