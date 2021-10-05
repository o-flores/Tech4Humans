import React, { useState } from 'react';
import './style.css';
import { FaSearch } from 'react-icons/fa';
import api from '../../services/api';

function WeatherSearch() {
  const [isInputActive, setIsInputActive] = useState(false);
  const [query, setQuery] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const city = await api.searchCityByName(query);
    console.log(city);
  }
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
    </div>
  );
}

export default WeatherSearch;
