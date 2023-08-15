import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import Image from 'next/image';
import SearchBar from './SearchBar';
import { useRouter } from "next/router";
import {characterImageMap} from "./charactermaps";



const base_url = "https://hp-api.onrender.com/api/characters";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
 

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axiosInstance.get(base_url);
        setCharacters(response.data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  // Map character names to image filenames
  const router = useRouter();
  const [characterId, setCharacterId] = useState([]);

  const handleButtonClick = (id) => {
    setCharacterId(id);
    router.push(`/characters/${id}`);
  };

  const handleSearch = searchTerm => {
    setSearchQuery(searchTerm);
     
    if (searchTerm === "") {
      setFilteredCharacters([]); // Clear filtered characters if search is empty
    } else {
      const filtered = characters.filter(character => {
        const nameMatch = character.name.toLowerCase().includes(searchTerm.toLowerCase());
        const houseMatch = character.house && character.house.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch || houseMatch;
      });

      setFilteredCharacters(filtered);
    }
  };

  const displayCharacters = searchQuery ? filteredCharacters : characters;
  

  return (
  <div>
     <h1 >Harry Potter Character </h1> 
     <a href ="/spells"> spells</a>
     <SearchBar onSearch={handleSearch} />
           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayCharacters.map((character) => (
          <li key={character._id} className="border border-blue-500 p-2 rounded-md">
            <div>
              <p className="font-semibold">{character.name}</p>
              <Image
      src={characterImageMap[character.name]}
      width={500}
      height={500}
      alt="Picture of the author"
    />
  
              <p className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-10 py-5  m-5 rounded-md">Date of Birth: {character.dateOfBirth}</p>
             {/* const characterId =`/characterdetails/${character.id}` */}
             <button className="bg-brown text-amber-700 py-5 px-10 border-b-2 border-transparent
              hover:border-amber-950 transition duration 900 ease-out pb-1 px-10" 
             onClick={() => handleButtonClick(character.id)}>Learn More
             </button>         
      
            </div>
          </li>
        ))}
       </ul>
                  
      </div>
    
  
  );
};

export default Home;
