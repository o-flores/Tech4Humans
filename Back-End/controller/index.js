const service = require('../services');

const postWeather = async (req, res, next) => {
  const { q: city } = req.query;
  const response = await service.postWeather({ city });

  if (response.error) return next(response);

  return res.status(201).json(response);
};

module.exports = {
  postWeather,
};
