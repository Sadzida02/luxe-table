import React from 'react'
import Image from 'next/image'
import { FaCartShopping } from "react-icons/fa6";
import LogOutForm from './LogOutForm';

function LogOutButton() {
  return (
    <div className='flex justify-around items-center gap-5'>
        <Image 
        src="/user.png"
        width={40}
        height={40}
        alt='user'/>
        <FaCartShopping className='text-olive text-2xl'/>
        
          <LogOutForm />
        
        
      
    </div>
  )
}

export default LogOutButton
