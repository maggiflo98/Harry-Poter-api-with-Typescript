import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";
import {characterImageMap} from "./charactermaps";


const base_url = "https://hp-api.onrender.com/api/characters";

const Home = () => {
  const [characters, setCharacters] = useState([]);

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

  return (
  <div>
     <h1>Harry Potter Character</h1> 
     <a href ="/spells">harry potter spells</a>
           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <li key={character.name} className="border border-blue-500 p-2 rounded-md">
            <div>
              <p className="font-semibold">{character.name}</p>
              <Image
      src={characterImageMap[character.name]}
      width={500}
      height={500}
      alt="Picture of the author"
    />
  
              <p>Date of Birth: {character.dateOfBirth}</p>
             {/* const characterId =`/characterdetails/${character.id}` */}
             <button onClick={() => handleButtonClick(character.id)}>Learn More</button>         
      
            </div>
          </li>
        ))}
       </ul>
                  
      </div>
    
  
  );
};

export default Home;
