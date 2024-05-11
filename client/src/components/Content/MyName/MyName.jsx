import React from 'react';
import dictionary from '../../../../Dictionary/MyName.json'; // Importing the dictionary JSON file
import './MyName.css'

const MyName = () => {
    return (
        <h1 id='name'>{dictionary['English'].TheName}</h1>
    );
}

export default MyName;
