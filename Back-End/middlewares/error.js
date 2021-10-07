const errorMiddleware = (error, req, res) => {
  const { code, message } = error;
  return res.status(code).json({ err: { message } });
};

module.exports = errorMiddleware;
