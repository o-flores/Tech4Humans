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
  const cityInfo = await searchCityByName(city, unit);

  if (cityInfo.code) return cityInfo;

  const { id } = cityInfo;
  const [result] = await model.updateCity({ id });

  if (result.changedRows === 0) {
    await model.postCity({ id, city });
    return {
      id, city, created: true, cityInfo,
    };
  }
  return {
    id, city, created: false, cityInfo,
  };
};

module.exports = {
  postCity,
};
