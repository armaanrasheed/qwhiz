import React, { useState } from 'react';
import axios from 'axios';
import '../styling/LandingPage.css';
import SearchResultDisplay from './SearchResultDisplay';

function LandingPage() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]); // State to store search results

  const handleSearchInputChange = async (event) => {
    setSearchInput(event.target.value);

    try {
      const res = await axios.get('http://localhost:3000/schoolResult', {
        params: {
          searchValue: searchInput.toLocaleLowerCase()
        }
      });
      const schoolData = res.data;
      setSearchResult(schoolData);
      console.log(schoolData);
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
      </div>
      {searchInput != '' && <SearchResultDisplay results={searchResult} />}
    </>
  );
}

export default LandingPage;
