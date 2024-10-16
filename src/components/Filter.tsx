"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  /*const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };*/

  return (
    <div className="my-12 flex justify-between md:px-8 lg:px-16">
        <select
          name="cat"
          className="py-2 px-4  h-max text-md font-medium bg-[#EBEDED]"
          //onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="plates">Plates</option>
          <option value="utensils">Utensils</option>
          <option value="tableDecor">Table Decor</option>
          <option value="potsAndPans">Pots and Pans</option>
          <option value="rganizers">Organizers</option>
          <option value="glasses">Glasses</option>Category
        </select>

      <div className="sm:flex md:flex hidden gap-6 flex-wrap">
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-md pl-2 w-24 ring-1 ring-gray-400"
          //onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-md pl-2 w-24 ring-1 ring-gray-400"
          //onChange={handleFilterChange}
        />
        {/* TODO: Filter Categories */}
        
        <select
          name=""
          id=""
          className="py-2 px-4 text-md font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 text-md font-medium bg-white ring-1 ring-gray-400"
          //onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;