import React, { useState } from 'react';
import "tailwindcss/tailwind.css";
import "tailwindcss/tailwind.css";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = event => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="search-bar py-10  relative mb-4 flex w-full   justify self-end ml-11">
      <label>Search:</label>
      <input className='
        border-2 px-5'
        type="text"
        placeholder="Search by name or house..."
        value={searchQuery}
        onChange={handleSearch}

        
      />
      <span
      class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
      id="basic-addon2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </span>
    </div>
  );
};

export default SearchBar;
