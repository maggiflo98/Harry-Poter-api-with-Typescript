import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios"; 
import "tailwindcss/tailwind.css";

const base_url = "https://hp-api.onrender.com/api/characters";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axiosInstance.get(base_url); // Use the correct URL
        const trimmedCharacters = response.data.slice(0, 12); // Get the first 10 characters
        setCharacters(trimmedCharacters);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Harry Potter Characters</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <li
            key={character.name}
            className="border border-blue-500 p-2 rounded-md"
          >
            <div>
              <p className="font-semibold">{character.name}</p>
              <p>Date of Birth: {character.dateOfBirth}</p> {/* Display Date of Birth */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};




export default Home;
