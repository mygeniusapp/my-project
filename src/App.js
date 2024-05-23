import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CityWeatherPage from './components/CityWeatherPage';
import CurrencyExchangePage from './components/CurrencyExchangePage';
import SaudiFactsPage from './components/SaudiFactsPage';
import TopAttractionsPage from './components/TopAttractionsPage';
import About from './components/About';
import './styles.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/city_weather" element={<CityWeatherPage />} />
      <Route path="/currency_exchange" element={<CurrencyExchangePage />} />
      <Route path="/saudi_facts" element={<SaudiFactsPage />} />
      <Route path="/top_attractions" element={<TopAttractionsPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;
