import React from "react";

function Search( { onSearch } ) {

  function handleSearch(e) {
    const searchField = e.target.value
    onSearch(searchField)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
