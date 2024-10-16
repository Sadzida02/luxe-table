import React from 'react'
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FaEarthEurope, FaLocationDot, FaPhone } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="flex flex-col text-white w-full pt-7 bg-olive tracking-widest  font-light">

        <div className='flex flex-row items-center justify-around'>
        <div className="flex flex-col text-sm">
        <a href="#" className="font-koulen p-1 text-lg">Follow us:</a>
        <a href="#" className="p-1 flex items-center"><FaInstagram/>&nbsp;LUXEtABLE</a>
        <a href="#" className="p-1 flex items-center"><FaFacebook/>&nbsp;LUXEtABLE</a>
        <a href="#" className="p-1 flex items-center"><FaEnvelope/>&nbsp;luxetable@gmail.com</a>
    </div>

    <div className="text-3xl text-white font-medium tracking-widest">LUXEtABLE</div>

    <div className="flex flex-col text-sm">
        <a href="#" className="font-koulen p-1 text-lg">Contact us:</a>
        <a href="#" className="p-1 flex items-center"><FaLocationDot/>&nbsp;Sarajevo</a>
        <a href="#" className="p-1 flex items-center"><FaEarthEurope/>&nbsp;Bosnia and Herzegovina</a>
        <a href="#" className="p-1 flex items-center"><FaPhone/>&nbsp;+38762 364 251</a>
    </div>
            
        </div>
    
      <div className='flex flex-col items-center mt-12'>
        <hr className='h-[0.5px] bg-green-950 w-3/4'/>
        <p className='text-[12px] py-2'>All rights reserved &copy; Made by Sadžida Valjevac / International University of Sarajevo 2024</p></div>  
    </footer>
  )
}

export default Footer
