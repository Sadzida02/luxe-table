import React from 'react'
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FaEarthEurope, FaLocationDot, FaPhone } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="flex flex-col text-white w-full pt-10 bg-olive tracking-widest font-light px-8 lg:px-16">

        
        <div className=' lg:flex justify-between gap-96'>     
            <div className='flex flex-col justify-center w-1/3'>

                <label htmlFor="email">SUBSCRIBE</label>
                <p className='text-sm tracking-normal mt-5'>Be the first oe to hear about special deals, <br />discounts and news about aesthetic world:</p>
                <div className='flex mt-2'>
                    <input name="email" placeholder ="enter your mail..." type="email" required className='px-3'/> <br/>
                    <button className="bg-[#c79a14] py-1 px-2 text-sm font-bold hover:animate-pulse">Join</button>
                </div>

                <div className="text-3xl mt-6 text-white font-medium tracking-widest">LUXEtABLE</div>
                
            </div>

            <div className='lg:flex w-2/3'>
              <div className="flex flex-col justify-center text-sm w-1/2">
            <a href="#" className="p-1 text-lg">Contact us:</a>
                <a href="#" className="p-1 flex items-center"><FaLocationDot/>&nbsp;Sarajevo</a>
                <a href="#" className="p-1 flex items-center"><FaEarthEurope/>&nbsp;Bosnia and Herzegovina</a>
                <a href="#" className="p-1 flex items-center"><FaPhone/>&nbsp;+38762 364 251</a>

            </div>
            <div className="flex flex-col  justify-center text-sm w-1/2 ">
                <a href="#" className="p-1 text-lg">Follow us:</a>
                <a href="#" className="p-1 flex items-center"><FaInstagram/>&nbsp;LUXEtABLE</a>
                <a href="#" className="p-1 flex items-center"><FaFacebook/>&nbsp;LUXEtABLE</a>
                <a href="#" className="p-1 flex items-center"><FaEnvelope/>&nbsp;luxetable@gmail.com</a>
                
                
            </div>
            </div>      
            
        </div>
    
      <div className='flex flex-col flex-wrap items-center mt-12'>
        <hr className='h-[0.5px] bg-green-950 w-3/4'/>
        <p className='text-[12px] py-2'>All rights reserved &copy; Made by Sadžida Valjevac / LUXEtABLE 2024</p></div>  
    </footer>
  )
}

export default Footer
