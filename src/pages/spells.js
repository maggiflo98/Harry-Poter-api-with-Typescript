import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import "tailwindcss/tailwind.css";

const base_url = "https://hp-api.onrender.com/api/spells";

const Spells = () => {
  const [spells, setSpells] = useState([]);
  const [id, setId] = useState([]);
  const [name, setNames] = useState([]);
  const [description, setDescription] = useState([]);


  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await axiosInstance.get(base_url);
        console.log("API Response:", response.data);
        setSpells(response.data); // Just set the spells without trimming
      } catch (error) {
        console.error("Error fetching spells:", error);
      }
    };

    fetchSpells();
  }, []);

  return (
    <div className="bg-cover bg-center min-h screen  flex-col flex justify-center items-center bg-teal-500   bg-[url('../../public/images/wand3.jpg')]">
      <h1 className="text-4x1 font-bold text-white  mt-3">Spells</h1>
      {/* <ul className="w-full space-x-8 mr-5"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  m-10 ml-10">
        {spells.map((spell, index) => (
          <div key={index} 
          className="p-6 rounded-lg shadow-md bg-white
           transform transform-transition hover:scale-105">
             <p className="font-semibold text-center mb-2 hover:underline hover:text-brown-600 text-black">{spell.name} </p>
             <p className="font-semibold text-center text-brown">{spell.description} </p>
             </div>
        ))}
        </div>
      {/* </ul> */}
    </div>
  );
};

export default Spells;
