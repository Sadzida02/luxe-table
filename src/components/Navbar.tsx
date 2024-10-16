import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full h-20 md:px-8 lg:px-16">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">       
            <a href='/' className="text-3xl text-olive font-medium tracking-widest">LUXEtABLE</a>
          <div className="flex items-center space-x-4">
                <SearchBar />
                <button className="bg-olive text-white px-4 py-1">Log In</button>
                <FaCartShopping className='text-olive text-2xl'/>  
            
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
