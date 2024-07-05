import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


function UniversityCourses(props){

    const location = useLocation();
    const currentPath = location.pathname;
    const match = currentPath.match(/\/(\d+)$/);
    const id = match ? match[1] : null; //extracted id of the current university page for database polling



    const universityName = props.universityName;
    const departments = props.departments;


    return(
        <div>

            <h1 className='text-color'>{universityName}</h1>
            <h2>{departments}</h2>
        </div>
    );
} 
export default UniversityCourses;
