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
          <tr>
            <th>Top 5 cidades mais procuradas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {mostSearched.length === 0 ? <td /> : null}
            {mostSearched.length > 0 && mostSearched.map(({ city, country }) => (
              <td key={city}>{`${city} - ${country}`}</td>
            ))}

          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Histórico de busca</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {citiesHistory.length === 0 ? <td /> : null}
            {citiesHistory.length > 0 && citiesHistory.map(({ city, country }) => (
              <td key={city}>{`${city} - ${country}`}</td>
            ))}

          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default SearchHistory;
