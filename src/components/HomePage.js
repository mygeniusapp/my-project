import React from 'react';
import ukImage from '../assets/uk.jpg'; // Add an image of the UK

const HomePage = () => (
  <div>
    <center>
    <img src={ukImage} alt="UK" style={ {paddingTop:'100px', width: '150px', height: '150px' }} />
    <h1>Welcome to CPIT405 App</h1>
    
    <p>This application provides information about the UK, current weather, exchange rates, and more.</p>
    </center>
  </div>
  
);

export default HomePage;
