import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search.js"


function PlantList() {
  const[plants, setPlants] = useState([])
  const[searchField, setSearchField] = useState("")
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

  //search
  const filteredPlants = plants.filter((plant) =>
  plant.name.toLowerCase().includes(searchField.toLowerCase())
)

function handleSearch(searchField) {
  setSearchField(searchField)
}

  return (
    <div>
      <NewPlantForm addPlant={addPlant} />
      <Search onSearch={handleSearch} />
      <ul className="cards">
        {filteredPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </ul>
    </div>
  );
}

export default PlantList;
