const connection = require('./connection');

const updateCity = async ({ id, time }) => {
  const data = await connection.execute(
    'UPDATE Tech4Humans.weather SET COUNT = COUNT + 1, updated_at = ? WHERE id = ?',
    [time, id],
  );
  return data;
};

const postCity = async ({ id, cityName }) => {
  const data = await connection.execute(
    'INSERT INTO Tech4Humans.weather (id, city, count) VALUES (?, ?, 1)',
    [id, cityName],
  );
  return data;
};

const getLastSearchs = async (limit) => {
  const [data] = await connection.execute(
    'SELECT city FROM Tech4Humans.weather ORDER BY updated_at DESC LIMIT 0,?',
    [limit],
  );
  return data;
};

module.exports = {
  postCity,
  updateCity,
  getLastSearchs,
};
