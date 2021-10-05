import React from 'react';
import PropTypes from 'prop-types';

function WeatherCard({ cityInfo }) {
  console.log(cityInfo);
  const {
    id, name, sys, main, weather,
  } = cityInfo;
  return (
    <div>
      <p>{name}</p>
      <p>{id}</p>
      <p>{sys.country}</p>
      <p>{main.temp}</p>
      <p>{weather.icon}</p>
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
  }),
}.isrequired;
