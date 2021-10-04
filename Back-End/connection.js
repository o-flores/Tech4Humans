const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: '12345678',
  database: 'Tech4Humans',
});

module.exports = connection;
