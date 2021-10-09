import React, { useEffect, useState } from 'react';
import './style.css';

const axios = require('axios');

function SearchHistory() {
  const [citiesHistory, setCitiesHistory] = useState([]);
  const [mostSearched, setMostSearched] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/weather/history');
        setCitiesHistory(data);
      } catch (error) {
        setCitiesHistory([]);
      }
    };
    const getTop5Cities = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/weather/most_searched');
        setMostSearched(data);
      } catch (error) {
        setMostSearched([]);
      }
    };
    getHistory();
    getTop5Cities();
  }, []);
  return (
    <div id="tables-container">
      <table>
        <thead>
          <tr>Top 5 cidades mais procuradas</tr>
        </thead>
        <tbody>
          {mostSearched.length === 0 && ' '}
          {mostSearched.length > 0 && mostSearched.map(({ city, country }) => (
            <tr key={city}>{`${city} - ${country}`}</tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>Histório de busca</tr>
        </thead>
        <tbody>
          {citiesHistory.length === 0 && ' '}
          {citiesHistory.length > 0 && citiesHistory.map(({ city, country }) => (
            <tr key={city}>{`${city} - ${country}`}</tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default SearchHistory;
