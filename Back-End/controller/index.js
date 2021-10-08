const service = require('../services');

const postCity = async (req, res, next) => {
  const { unit, city } = req.body;
  const response = await service.postCity({ city, unit });

  if (response.code) return next(response);

  if (response.created) return res.status(201).json(response);

  return res.status(200).json(response);
};

const getLastSearchs = async (req, res, next) => {
  const { limit } = req.query;

  const response = await service.getLastSearchs(limit);

  if (response.error) return next(response);

  return res.status(200).json(response);
};

module.exports = {
  postCity,
  getLastSearchs,
};
