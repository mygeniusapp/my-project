export async function fetchWeatherData() {
    const apiKey = '8c84d67af2a2ac88714154a2e2f54316';
    const city = 'Jeddah';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
  
    const data = await response.json();
    return {
      temp: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    };
  }
  
  export async function fetchExchangeRateData() {
    const apiKey = 'a2871a1c6ff2c92c62c39cf4';
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/SAR`);
  
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rate data');
    }
  
    const data = await response.json();
    return data.rates.USD;
  }
  