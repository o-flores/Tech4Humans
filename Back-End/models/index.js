const connection = require('./connection');

const updateCity = async ({ id }) => {
  const data = await connection.execute(
    'UPDATE Tech4Humans.weather SET COUNT = COUNT + 1 WHERE id = ?',
    [id],
  );
  return data;
};

const postCity = async ({ id, city }) => {
  const data = await connection.execute(
    'INSERT INTO Tech4Humans.weather (id, city, count) VALUES (?, ?, 1)',
    [id, city],
  );
  return data;
};

module.exports = {
  postCity,
  updateCity,
};
