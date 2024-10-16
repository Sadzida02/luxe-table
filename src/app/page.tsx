import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Grid from "../components/ProductCategories";
import Link from 'next/link';
import { MdArrowCircleRight } from "react-icons/md";


export default function Home() {
  return (
    <>
    <Banner />
    <Hero />
    <div className=' text-3xl mt-16 text-medium flex justify-center w-full text-olive'>
            <p>You deserve the best and most aesthetic dishes in your home...</p>
        </div>
        <hr  className='text-slate-800 my-20'/>
        <div className='text-4xl text-medium flex flex-col my-5 items-center justify-center w-full text-olive tracking-widest'>
            <div className='flex'>
                <Link href="/productsPage">SHOP NOW</Link>
                <MdArrowCircleRight />
            </div>
            
        </div>
    <Grid />

    
    

    </>
  );
}
