const mysql = require('mysql2/promise');

module.exports = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie_db'
  }
);
