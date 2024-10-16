'use client' 
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { useRouter } from "next/navigation";

const SearchBar = () => {

    const router = useRouter();
  
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
  
      if(name){
        router.push(`/productsPage?name=${name}`)
      }
    };

    return (
        <form
          className="flex items-center justify-between gap-4"
          onSubmit={handleSearch}
        >
          <IoIosSearch/>
          <input
            type="text"
            name="name"
            placeholder="Search"
            className="flex-1 bg-transparent border-b border-olive px-2 py-1"
          />
          <button className="cursor-pointer">
          </button>
        </form>
      );
    };
    
    export default SearchBar;


