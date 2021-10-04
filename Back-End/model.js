const connection = require('./connection');

const postCity = async ({ city }) => {
  await connection.execute(
    'INSERT INTO Tech4Humans.weather (city) VALUES (?)',
    [city],
  );

  return { city };
};

module.exports = {
  postCity,
};
