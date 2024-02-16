import React, { useState } from "react";

function NewPlantForm() {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)

  function handleFormSubmit(e) {
    e.preventDefault();
   

    const plantData = {
      name,
      image,
      price,
    }

    fetch('http://localhost:6001/plants', {
    method: "POST",
    headers: {'Content-Type' : "application/json",
  },
    body: JSON.stringify(plantData),
})
  .then((resp) => resp.json())
  .then(newPlant => {console.log(newPlant)})
  .catch(error => {console.error("Error with newPlant Fetch", error)})


  }
  
  return (
    <div className="new-plant-form">

      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>

        <input type="text" name="name" placeholder="Plant name" 
        onChange={e => setName(e.target.value)}/>

        <input type="text" name="image" placeholder="Image URL" 
        onChange={e => setImage(e.target.value)}/>

        <input type="number" name="price" step="0.01" placeholder="Price" 
        onChange={e => setName(e.target.value)}/>

        <button type="submit">Add Plant</button>

      </form>
    </div>
  );
}

export default NewPlantForm;
