const connection = require('./connection');

const updateCity = async ({ id, time }) => {
  const data = await connection.execute(
    'UPDATE Tech4Humans.weather SET COUNT = COUNT + 1, updated_at = ? WHERE id = ?',
    [time, id],
  );
  return data;
};

const postCity = async ({ id, cityName, country }) => {
  const data = await connection.execute(
    'INSERT INTO Tech4Humans.weather (id, city, country, count) VALUES (?, ?, ?, 1)',
    [id, cityName, country],
  );
  return data;
};

const getLastSearchs = async () => {
  const [data] = await connection.execute(
    'SELECT city, country FROM Tech4Humans.weather ORDER BY updated_at DESC LIMIT 0,3',
  );
  return data;
};

const getTop5Cities = async () => {
  const [data] = await connection.execute(
    'SELECT city, country FROM Tech4Humans.weather ORDER BY count DESC, city  LIMIT 0,5',
  );
  return data;
};

module.exports = {
  postCity,
  updateCity,
  getLastSearchs,
  getTop5Cities,
};
