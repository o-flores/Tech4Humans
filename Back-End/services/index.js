const axios = require('axios');
const model = require('../models');

const APIKEY = '734666bbe244aa6889b49b8a4e3030a2';

const getFullDate = () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const dateTime = `${date} ${time}`;
  return dateTime;
};

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

  const { id, name: cityName } = cityInfo;
  const time = getFullDate();

  try {
    const [result] = await model.updateCity({ id, time });

    if (result.changedRows === 0) {
      await model.postCity({ id, cityName });
      return {
        id, city, created: true, cityInfo,
      };
    }
    return {
      id, city, created: false, cityInfo,
    };
  } catch (error) {
    return { code: error.code, message: error.message };
  }
};

module.exports = {
  postCity,
};
