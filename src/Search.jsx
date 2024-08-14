import React from 'react';
import './App.css';

const Search = ({ setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='search-container-main'>
      <input className="search-container"
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
