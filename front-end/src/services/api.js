const APIKEY = '734666bbe244aa6889b49b8a4e3030a2';
const axios = require('axios');

const config = {
  method: 'get',
};

const searchCityByName = async (name) => {
  config.url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIKEY}`;
  try {
    const { data } = await axios(config);
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  searchCityByName,
};
