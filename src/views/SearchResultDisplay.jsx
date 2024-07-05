import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styling/SearchResultStyling.css';

function SearchResultDisplay(props) {
  const navigate = useNavigate();
  const { results } = props;
  console.log('Search results:', results); // Log results passed to component

  const handleRoutingButton = (id) => {
    navigate(`/university-page/${id}`);
  };

  return (
    <div className="results-section">
      <ul className="search-result-display-frame">
        {results.slice(0, 3).map((result, index) => (
          <li key={index} className="result-item">
            <div className="result-text">
              <h3>{result.schoolname}</h3>
              <p>{result.location}</p>
            </div>
            <button className="result-button" onClick={() => handleRoutingButton(result.id)}>Visit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultDisplay;
