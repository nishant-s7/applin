import React, { useEffect, useState } from 'react';
import config from '../helpers/config'; // Adjust the path accordingly

const Info = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Delhi'); // Default city is set to Delhi

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch weather data based on the submitted city
    const apiKey = config.apiKey;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    try{
      fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          // If response is not OK (status code other than 200), handle it accordingly
          console.error(`Error: ${response.status} - ${response.statusText}`);
          // You can choose to display nothing or show an error message here
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          // Process and set weather data only if there is valid data
          setWeatherData(data); // Make sure setWeatherData is defined
        }
      })
      .catch((error) => console.error('Error fetching weather data:', error));
    }catch(err){
      console.log(err);
    }
   
  };

  return (
    <div className="rounded-t-3xl bg-white pt-12 min-h-[200px]">
      <div className='border-2 border-color4 m-2 rounded-lg shadow-lg p-4'>
        <h2 className="text-2xl font-bold mb-4">Weather Information</h2>
        <form onSubmit={handleSubmit}>
          <div className='w-1/2'>
            <label htmlFor="cityInput" className="block text-sm font-medium text-gray-700">City:</label>
            <input
              type="text"
              id="cityInput"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <button type="submit" className="mt-4 p-2 bg-color2 text-white rounded-md">Get Weather</button>
        </form>
        <div className='flex items-center justify-between mt-4'>
          {weatherData ? (
            <>
              <div className='w-1/2'>
                <p>{`City: ${weatherData.name}`}</p>
                <p>{`Temperature: ${Math.floor(weatherData.main.temp - 273)} °C`}</p>
                <p>{`Description: ${weatherData.weather[0].description}`}</p>
              </div>
              <div className='w-1/2'>
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather icon" />
              </div>
            </>
          ) : (
            <p>Loading weather information...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
