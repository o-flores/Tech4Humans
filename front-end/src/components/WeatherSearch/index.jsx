import React, { useState } from 'react';
import './style.css';
import { FaSearch } from 'react-icons/fa';
import Switch from '@mui/material/Switch';
import WeatherCard from '../WeatherCard';

const axios = require('axios');

function WeatherSearch() {
  const [query, setQuery] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(false);
  const [unit, setUnit] = useState('metric');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3001/weather', {
        city: query,
        unit,
      });
      setWeatherInfo(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    if (event.target.checked) setUnit('metric');
    else setUnit('imperial');
  };
  return (
    <div id="left-container">
      <div id="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque pelo nome da cidade"
            onChange={({ target }) => setQuery(target.value)}
            value={query}
          />
          <FaSearch color="white" onClick={(e) => handleSubmit(e)} />
        </form>
        <Switch
          onChange={handleChange}
          defaultChecked
          color="default"
        />
        {unit === 'imperial' ? <span>ºF</span> : <span>ºC</span>}
      </div>
      <div>
        {
          weatherInfo && <WeatherCard cityInfo={weatherInfo} unit={unit} />
        }
      </div>
    </div>
  );
}

export default WeatherSearch;
