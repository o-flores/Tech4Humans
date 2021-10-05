import React, { useState } from 'react';
import './style.css';
import { FaSearch } from 'react-icons/fa';

function WeatherSearch() {
  const [isInputActive, setIsInputActive] = useState(false);
  const [query, setQuery] = useState('');
  return (
    <div>
      <FaSearch onClick={() => setIsInputActive(!isInputActive)} />
      {isInputActive && (
        <input
          type="text"
          placeholder="Busque pelo nome da cidade"
          onChange={({ target }) => setQuery(target.value)}
          value={query}
        />
      )}
    </div>
  );
}

export default WeatherSearch;
