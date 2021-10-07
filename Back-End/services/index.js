const axios = require('axios');
const model = require('../models');

const APIKEY = '734666bbe244aa6889b49b8a4e3030a2';

const searchCityByName = async (name, unit) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIKEY}&lang=pt_br&units=${unit}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return { code: error.response.data.cod, message: error.response.data.message };
  }
};

const postCity = async ({ city, unit }) => {
  const data = await searchCityByName(city, unit);

  if (!data.code) {
    await model.postCity({ city });
  }
  return data;
};

module.exports = {
  postCity,
};
