import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";


function PlantList() {
  const[plants, setPlants] = useState([])

    function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

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
    <div>
      <NewPlantForm addPlant={addPlant} />
      <ul className="cards">
        {plants.map((plant) => (
          <PlantCard 
          key={plant.id} 
          plant={plant} />
        ))}
      </ul>
    </div>
  );
}

export default PlantList;
