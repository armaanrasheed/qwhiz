import React, { useState } from 'react';
import axios from 'axios';
import '../styling/LandingPage.css';


function LandingPage() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState(null); // Changed to null for conditional rendering

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSchoolSearchButton = async () => {
      try {
        const res = await axios.get('http://localhost:3000/users'); // Assuming you want to search all users
        const userData = res.data;
        setSearchResult(userData); // Set the entire array of user data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    
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
        <button className="schoolSearchButton" onClick={handleSchoolSearchButton}>
          Search
        </button>
        {searchInput && searchResult && searchResult.map((user) => (
          <div key={user.id} className="userCard">
            <p>Name: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Date of Birth: {new Date(user.dob).toLocaleDateString()}</p>
            <p>Created At: {new Date(user.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingPage;