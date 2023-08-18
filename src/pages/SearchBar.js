import React, { useState } from 'react';
import "tailwindcss/tailwind.css";
import "tailwindcss/tailwind.css";
import Link from "next/link";


const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = event => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-end w-full px-4 py-2">
       <div className="search-bar flex">
    
    <label className="mr-2 mt-2 font-burtons font-bold  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">Search:</label>
    <input
      className="border-2 px-5 py-2 rounded-md sm:w-32 md:w-48 lg:w-64"
      type="text"
      placeholder="Search by name or house..."
      value={searchQuery}
      onChange={handleSearch}
    />
    <span className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  </div>
 <Link href ="/spells" className="text-black-500 hover:underline font-burtons p-5 font-semibold  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500  "> Harry Potter Spells
  </Link>
</div>

  );
};

export default SearchBar;
