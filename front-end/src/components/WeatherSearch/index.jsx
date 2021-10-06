import React, { useState } from 'react';
import './style.css';
import { FaSearch } from 'react-icons/fa';
import Switch from '@mui/material/Switch';
import api from '../../services/api';
import WeatherCard from '../WeatherCard';

function WeatherSearch() {
  const [query, setQuery] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(false);
  const [unit, setUnit] = useState('metric');

  async function handleSubmit(e) {
    e.preventDefault();
    const city = await api.searchCityByName(query, unit);
    setWeatherInfo(city);
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
          <FaSearch onClick={(e) => handleSubmit(e)} />
        </form>
        <Switch
          onChange={handleChange}
          defaultChecked
          color="default"
        />
        {unit === 'imperial' ? 'ºF' : 'ºC'}
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
