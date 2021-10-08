/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import SearchHistory from './components/SearchHistory';
import WeatherSearch from './components/WeatherSearch/index';

function App() {
  return (
    <div className="App">
      <WeatherSearch />
      <SearchHistory />
    </div>
  );
}

export default App;
