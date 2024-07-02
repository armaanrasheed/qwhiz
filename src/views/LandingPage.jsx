import React, { useState } from 'react';
import axios from 'axios';
import '../styling/LandingPage.css';

function App() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSchoolSearchButton = (event) =>{
    axios.get('http://localhost:3000/users')
    .then(res => {
      const users = res.data;
      console.log(users);
    })
    
  }



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
        <button className = "schoolSearchButton"
        onClick={handleSchoolSearchButton}>Search</button>
      </div>
    </>
  );
}

export default App;
