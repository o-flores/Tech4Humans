/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './style.css';

const axios = require('axios');

function SearchHistory() {
  const [citiesHistory, setCitiesHistory] = useState([]);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/weather/history?limit=${limit}`);
        setCitiesHistory(data);
      } catch (error) {
        console.log(error);
      }
    };
    getHistory();
  }, []);
  return (
    <div id="tables-container">
      <table>
        <thead>
          <tr>Top 5 procuradas</tr>
        </thead>
        <tbody>
          <tr>1</tr>
          <tr>2</tr>
          <tr>3</tr>
          <tr>4</tr>
          <tr>5</tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>Histório de busca</tr>
        </thead>
        <tbody>
          { citiesHistory.length === 0 && 'Nenhum resultado' }
          {citiesHistory.length > 0 && citiesHistory.map((city) => (
            <tr key={city}>{city}</tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default SearchHistory;
