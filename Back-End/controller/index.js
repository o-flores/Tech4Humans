const service = require('../services');

const postWeather = async (req, res, next) => {
  const { unit, city } = req.body;
  const response = await service.postWeather({ city, unit });

  if (response.error) return next(response);

  return res.status(201).json(response);
};

module.exports = {
  postWeather,
};
