import React, { useEffect, useState } from "react";
import axios from "axios"; // Adjust the path based on your project structure
import { useRouter } from "next/router";
 import Image from 'next/image';
import {characterImageMap} from "../charactermaps";


const CharacterDetails = () => {
  const [character, setCharacter] = useState({});
  const [houseDetails, setHouseDetails] = useState({});
  const [spells, setSpells] = useState([]);

  const router = useRouter();
 const { characterId } = router.query;

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const [characterResponse, houseResponse, spellsResponse] = await Promise.all([
          axios.get(`https://hp-api.onrender.com/api/character/${characterId}`),
        //   axiosInstance.get(`/character/${id}/house`), // Update the endpoint for house details
        //   axiosInstance.get("/spells") // Fetch all spells
        ]);

        setCharacter(characterResponse.data[0]);
        // setHouseDetails(houseResponse.data);
        // setSpells(spellsResponse.data);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    if (characterId) {
      fetchCharacterDetails();
    }
  }, [characterId]);
 console.log(character)
  return (
    <div>
      <h1>{character.name} Details</h1>
      <Image
      src={characterImageMap[character.name]}
      width={500}
      height={500}
      alt="Picture of the author"
    />
      <p>Date of Birth: {character.dateOfBirth}</p>
      <p>House: {character.house}</p>
       {/* <p>Wand:{character.wand.wood}</p> */}
      <p>Name:{character.name}</p>
      <p>Actor:{character.actor}</p>
      <p>gender:{character.gender}</p>
      <p>Wand Name: {character.wand && character.wand.core}</p>
      <p>Wand Wood:{character.wand && character.wand.wood}</p>
      <p>Patronus:{character.patronus}</p>
      <p>Species:{character.species}</p>
      <p>Ancestry:{character.ancestry}</p>
      
    
     
    </div>
  );
};

export default CharacterDetails;
