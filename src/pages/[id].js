import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";

const CharacterDetailsPage = ({ character }) => {
  const [houseDetails, setHouseDetails] = useState(null);
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const response = await axiosInstance.get(`/characters/house/${character.house}`);
        setHouseDetails(response.data[0]);
      } catch (error) {
        console.error("Error fetching house details:", error);
      }
    };

    const fetchSpells = async () => {
      try {
        const response = await axiosInstance.get("/spells");
        setSpells(response.data);
      } catch (error) {
        console.error("Error fetching spells:", error);
      }
    };

    if (character.house) {
      fetchHouseDetails();
    }

    fetchSpells();
  }, [character.house]);

  return (
    <div>
      <h1>{character.name} Details</h1>
      {houseDetails && <p>House: {houseDetails.name}</p>}
      <p>Spells:</p>
<ul>
  {Array.isArray(spells) ? (
    spells.map(spell => (
      <li key={spell._id}>{spell.spell}</li>
    ))
  ) : (
    <li>No spells available.</li>
  )}
</ul>

    </div>
  );
};

CharacterDetailsPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  try {
    const response = await axiosInstance.get(`/characters/${id}`);
    return { character: response.data };
  } catch (error) {
    console.error("Error fetching character details:", error);
    return { character: {} };
  }
};

export default CharacterDetailsPage;
