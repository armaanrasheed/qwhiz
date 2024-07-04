import React, { useState } from 'react';
import axios from 'axios';
import '../styling/SearchResultStyling.css'

function SearchResultDisplay(){



    return (
        <div className ="results-section">
            <ul className ="search-result-display-frame"></ul>
        </div>
    );

};

export default SearchResultDisplay;
