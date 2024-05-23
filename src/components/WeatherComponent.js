import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../scripts';
import DataCard from './DataCard';
import weatherImage from '../assets/weather-logo.JPG'; 

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData()
      .then(data => setWeather(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div className="error">Error: {error}</div>;
  if (!weather) return <div className="loading">Loading...</div>;

  return (
    <div>
    <DataCard cardimage={weatherImage} title="Weather in Jeddah">
      <p><strong>Temperature:</strong> {weather.temp} °C</p>
      <p><strong>pressure:</strong> {weather.pressure} hPa</p>
      <p><strong>humidity:</strong> {weather.humidity} %</p>
      <p><strong>Condition: </strong> {weather.description}</p>
    </DataCard>
    </div>
  );
};

export default WeatherComponent;
