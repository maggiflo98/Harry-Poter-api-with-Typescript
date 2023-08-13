import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";

const base_url = "https://hp-api.onrender.com/api/spells";

const Spells = () => {
  const [spells, setSpells] = useState([]);

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
    <div>
      <h1>Spells</h1>
      <ul>
        {spells.map((spell, index) => (
          <li key={index}>
            <p>{spell.spell} </p></li>
        ))}
      </ul>
    </div>
  );
};

export default Spells;
