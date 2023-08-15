import React, { useEffect, useState } from "react";
import axios from "axios"; // Adjust the path based on your project structure
import { useRouter } from "next/router";
import Image from 'next/image';
import { gsap } from "gsap";
import "tailwindcss/tailwind.css";
import { characterImageMap } from "../character";


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
        <div className="flex-none p-5">
      <h1 className=" font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 text-center text-4xl p-4 ml-8">Let's know {character.name}</h1>
      <Image
        src={characterImageMap[character.name]}
        width={500}
        height={500}
        alt="Character"
        className="character-image" // Add this class
      />
      </div>
      {/* Rest of your character details */}
      <div className="flex-grow p-2 text-white">
      <p className="text-amber-700 p-2 ">Date of Birth: {character.dateOfBirth}</p>
       <p className="text-amber-700 p-2">House: {character.house}</p>
       {/* <p>Wand:{character.wand.wood}</p> */}
      <p className="text-amber-700 p-2">Name:  {character.name}</p>
       <p className="text-amber-700 p-2">Actor: {character.actor}</p>
      <p className="text-amber-700 p-2">Gender: {character.gender}</p>
       <p className="text-amber-700 p-2">Wand Name: {character.wand && character.wand.core}</p>
       <p className="text-amber-700 p-2">Wand Wood: {character.wand && character.wand.wood}</p>
      <p className="text-amber-700 p-2">Patronus: {character.patronus}</p>
      <p className="text-amber-700 p-2">Species: {character.species}</p>
      <p className="text-amber-700 p-2">Ancestry: {character.ancestry}</p>
    </div>
    </div>
    </div>
  );
};




 export default CharacterDetails;
