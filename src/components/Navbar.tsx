import React from 'react'
import SearchBar from './SearchBar';
import LogInButton from './LogInButton';
import { useState } from 'react';
import User from './User';
import { getSession } from '@/actions';

const Navbar = async () => {

  const session = await getSession()
  console.log (session)
  
  return (
    <div>
      <nav className="bg-white shadow-md fixed w-full h-20 md:px-8 lg:px-16">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">       
            <a href='/' className="text-3xl text-olive font-medium tracking-widest">LUXEtABLE</a>
          <div className="flex items-center space-x-4">
                <SearchBar />
                {session.isLoggedIn && <User />}
                {!session.isLoggedIn && <LogInButton />} 
                 
            
          </div>
        </div>
      </div>
    </nav>
    
    </div>
    

  )
}

export default Navbar
