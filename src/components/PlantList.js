import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const[plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(plantData => {
      setPlants(plantData)
  
    })
    .catch(error => {
      console.log("Error with the fetch", error)
    })
  }, []);

  return (
    <ul className="cards">
      {plants.map(plant => (
      <PlantCard 
      key={plant.id}
      plant={plant} />
    ))}
    </ul>
  );
}

export default PlantList;
