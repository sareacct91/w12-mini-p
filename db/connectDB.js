import mysql from "mysql2/promise";

export default await mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie_db'
  }
)


/*
const mysql = require('mysql2/promise');

module.exports = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie_db'
  }
)
*/
