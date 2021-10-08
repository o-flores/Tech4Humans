/* eslint-disable no-unused-vars */
const errorMiddleware = (err, _req, res, _next) => {
  const { code, message } = err;

  if (typeof code !== 'number') return res.status(500).json({ error: { message } });

  return res.status(code).json({ error: { message } });
};

module.exports = errorMiddleware;
