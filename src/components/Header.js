// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/city_weather">City Weather</Link></li>
        <li><Link to="/currency_exchange">Currency Exchange</Link></li>
        <li><Link to="/saudi_facts">Saudi Historical Facts</Link></li>
        <li><Link to="/top_attractions">Top Attractions</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
