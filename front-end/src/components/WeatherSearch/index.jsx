import React, { useState } from 'react';
import './style.css';
import { FaSearch } from 'react-icons/fa';
import Switch from '@mui/material/Switch';
import api from '../../services/api';
import WeatherCard from '../WeatherCard';

function WeatherSearch() {
  const [isInputActive, setIsInputActive] = useState(false);
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
    <div>
      <FaSearch onClick={() => setIsInputActive(!isInputActive)} />
      {isInputActive && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque pelo nome da cidade"
            onChange={({ target }) => setQuery(target.value)}
            value={query}
          />
          <button
            type="submit"
          >
            Procurar
          </button>
        </form>
      )}
      <Switch
        onChange={handleChange}
        defaultChecked
        color="default"
      />
      { unit === 'imperial' ? 'ºF' : 'ºC' }
      {
        weatherInfo && <WeatherCard cityInfo={weatherInfo} />
      }
    </div>
  );
}

export default WeatherSearch;
