import React, { useState, useEffect } from 'react';
import { fetchExchangeRateData } from '../scripts';
import DataCard from './DataCard';
import exchangeImage from '../assets/exchange-logo.png'; 

const ExchangeRateComponent = () => {
  const [rate, setRate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExchangeRateData()
      .then(data => setRate(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div className="error">Error: {error}</div>;
  if (!rate) return <div className="loading">Loading...</div>;

  return (
    <DataCard cardimage={exchangeImage} title="Saudi Riyal to USD Exchange Rate">
     <p>1 USD = {Math.round((1 / rate) * 100) / 100} SAR</p>
      <p>1 SAR = {rate} USD</p>
    </DataCard>
  );
};

export default ExchangeRateComponent;
