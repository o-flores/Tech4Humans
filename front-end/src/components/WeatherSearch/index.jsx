import React, { useState } from 'react';
import './style.css';
import { FaSearch } from 'react-icons/fa';
import Switch from '@mui/material/Switch';
import WeatherCard from '../WeatherCard';
import Loading from '../Loading';

const axios = require('axios');

function WeatherSearch() {
  const [query, setQuery] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState('metric');
  const [cityError, setCityError] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    setCityError(false);
    setLoading(true);
    setError(false);
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3001/weather', {
        city: query,
        unit,
      });
      setWeatherInfo(data.cityInfo);
    } catch (err) {
      if (err.response.data.message === 'city not found') setCityError(true);
      else setCityError(true);
    }
    setLoading(false);
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
        { error && <p className="error-message">Por favor tente novamente mais tarde</p> }
      </div>
      <div>
        {loading && <Loading />}
      </div>
      <div>
        {cityError && <p className="error-message">por favor digite uma cidade existente</p>}
      </div>
      <div>
        {
          weatherInfo
          && !cityError
          && <WeatherCard cityInfo={weatherInfo} unit={unit} />
        }
      </div>
    </div>
  );
}

export default WeatherSearch;
