import React, { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance"; // Adjust the path based on your project structure
import harryPotterImage from "../../public/harry_potter.png";
import { useRouter } from "next/router";

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});
  const [houseDetails, setHouseDetails] = useState({});
  const [spells, setSpells] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const [characterResponse, houseResponse, spellsResponse] = await Promise.all([
          axiosInstance.get(`/characters/${id}`),
          axiosInstance.get(`/characters/${id}/house`), // Update the endpoint for house details
          axiosInstance.get("/spells") // Fetch all spells
        ]);

        setCharacter(characterResponse.data);
        setHouseDetails(houseResponse.data);
        setSpells(spellsResponse.data);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    if (id) {
      fetchCharacterDetails();
    }
  }, [id]);

  return (
    <div>
      <h1>{character.name} Details</h1>
      <img src={characterImageMap[character.name]} alt={character.name} />
      <p>Date of Birth: {character.dateOfBirth}</p>
      <p>House: {houseDetails.name}</p>
      <h2>Spells:</h2>
      <ul>
        {spells.map((spell) => (
          <li key={spell._id}>{spell.spell}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetails;
