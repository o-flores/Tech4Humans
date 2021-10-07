const service = require('../services');

const postCity = async (req, res, next) => {
  const { unit, city } = req.body;
  const response = await service.postCity({ city, unit });

  if (response.error) return next(response);

  return res.status(201).json(response);
};

module.exports = {
  postCity,
};
