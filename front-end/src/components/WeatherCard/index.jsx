import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BsCloudDrizzle, BsWind } from 'react-icons/bs';
import './style.css';

function WeatherCard({ cityInfo, unit }) {
  const [tempSymbol, setTempSymbol] = useState('ºC');
  const [windSymbol, setWindSymbol] = useState('m/s');
  const {
    name, sys, main, weather, wind,
  } = cityInfo;

  useEffect(() => {
    if (unit === 'imperial') {
      setTempSymbol('ºF');
      setWindSymbol('milhas/h');
    } else {
      setTempSymbol('ºC');
      setWindSymbol('m/s');
    }
  }, [cityInfo]);

  return (
    <div id="weather-container">
      <p id="weather-temp">{`${main.temp} ${tempSymbol}`}</p>
      <p id="weather-city">{`${name} - ${sys.country}`}</p>
      <div id="weather-description-container">
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <span>{`${weather[0].description}`}</span>
      </div>
      <div className="weather-condition-container">
        <BsCloudDrizzle color="#48355B" fontSize="25px" />
        <span>{`${main.humidity}%`}</span>
      </div>
      <div className="weather-condition-container">
        <BsWind color="#48355B" fontSize="25px" />
        <span>{`${wind.speed} ${windSymbol}`}</span>
      </div>
    </div>
  );
}

export default WeatherCard;

WeatherCard.propTypes = {
  cityInfo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    sys: PropTypes.shape({
      country: PropTypes.string,
      id: PropTypes.number,
      sunrise: PropTypes.number,
      sunset: PropTypes.number,
      type: PropTypes.number,
    }),
    main: PropTypes.shape({
      feels_like: PropTypes.number,
      humidity: PropTypes.number,
      pressure: PropTypes.number,
      temp: PropTypes.number,
      temp_max: PropTypes.number,
      temp_min: PropTypes.number,
    }),
    weather: PropTypes.shape({
      description: PropTypes.string,
      icon: PropTypes.string,
      id: PropTypes.number,
      main: PropTypes.string,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      deg: PropTypes.number,
    }),
  }),
  unit: PropTypes.string,
}.isrequired;
