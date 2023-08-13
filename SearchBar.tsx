// SearchBar.tsx
import React, { useState } from "react";
import "tailwindcss/tailwind.css"; 

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <h1>hello motherfucker</h1>
    </div>
  );
};

export default SearchBar;
