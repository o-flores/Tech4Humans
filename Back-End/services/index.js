const model = require('../models');

const postWeather = async ({ city }) => {
  const response = await model.postCity({ city });
  return response;
};

module.exports = {
  postWeather,
};
