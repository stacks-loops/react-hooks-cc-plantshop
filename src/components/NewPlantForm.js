import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  function handleFormSubmit(e) {
    e.preventDefault();

    const plantData = {
      name,
      image,
      price,
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(plantData),
    })
      .then((resp) => resp.json())
      .then((newPlant) => {
        addPlant(newPlant);
        console.log(newPlant);
      })
      .catch((error) => {
        console.error("Error with newPlant Fetch", error);
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
