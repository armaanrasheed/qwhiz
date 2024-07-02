import React, { useState } from 'react';
import '../styling/LandingPage.css';

function App() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };

  return (
    <>
      <div className='landingPageDivider'>
        <h1 className="logo">Qwhiz</h1>
      </div>
      <div className='searchBar'>
        <input
          className='searchBarStyling'
          id="searchContent"
          placeholder='Enter your university or college'
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>
    </>
  );
}

export default App;
