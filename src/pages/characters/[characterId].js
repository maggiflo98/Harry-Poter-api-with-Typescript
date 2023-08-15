import React, { useEffect, useState } from "react";
import axios from "axios"; // Adjust the path based on your project structure
import { useRouter } from "next/router";
import Image from 'next/image';
import { gsap } from "gsap";
import "tailwindcss/tailwind.css";
import { characterImageMap } from "../charactermaps";

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});
  const router = useRouter();
  const { characterId } = router.query;

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const [characterResponse] = await Promise.all([
          axios.get(`https://hp-api.onrender.com/api/character/${characterId}`),
        ]);

        setCharacter(characterResponse.data[0]);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    if (characterId) {
      fetchCharacterDetails();
    }
  }, [characterId]);

  useEffect(() => {
    // Add GSAP animation for the character image
    const image = document.querySelector(".character-image");

    gsap.fromTo(
      image,
      { y: 0 },
      { y: -10, duration: 1.0, repeat: -1, yoyo: true, ease: "slow" }
    );
  
  }, []);

  return (
    <div className="bg-cover bg-center min-h-screen flex-col flex justify-center items-center bg-teal-500 bg-[url('../../public/images/wand3.jpg')]" >
      <div className="flex items-center">
        <div className="flex-none p-8">
      <h1 className="text-white text-center p-10 ml-8">{character.name} Details</h1>
      <Image
        src={characterImageMap[character.name]}
        width={500}
        height={500}
        alt="Character"
        className="character-image" // Add this class
      />
      </div>
      {/* Rest of your character details */}
      <div className="flex-grow p-8 text-white">
      <p className="text-white">Date of Birth: {character.dateOfBirth}</p>
       <p className="text-white">House: {character.house}</p>
       {/* <p>Wand:{character.wand.wood}</p> */}
      <p className="text-white">Name:{character.name}</p>
       <p className="text-white">Actor:{character.actor}</p>
      <p className="text-white">Gender:{character.gender}</p>
       <p className="text-white">Wand Name: {character.wand && character.wand.core}</p>
       <p className="text-white">Wand Wood:{character.wand && character.wand.wood}</p>
      <p className="text-white">Patronus:{character.patronus}</p>
      <p className="text-white">Species:{character.species}</p>
      <p className="text-white">Ancestry:{character.ancestry}</p>
    </div>
    </div>
    </div>
  );
};




 export default CharacterDetails;
