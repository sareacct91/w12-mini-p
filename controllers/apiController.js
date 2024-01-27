let db = (async () => await require('../db/connectDB'))();

// const db = require('../db/connectDB');

const getMovies = async (req, res) => {
  const sql = `SELECT * FROM movies;`;

  try {
    // console.log(await db);
    // await db;
    const [rows, fields] = await db.query(sql);

    console.log(rows, fields);

    res.status(200).json({
      message: 'success',
      data: rows
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Try again later'
    });
  }
};

const test = async (req, res) => {
  const sql = `SELECT * FROM movies;`;

  try {
    const db = await require('../db/connectDB');
    const [rows, fields] = await db.query(sql);

    console.log(rows, fields);

    res.status(200).json({
      message: 'success',
      data: rows
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Try again later'
    });
  }
};

module.exports = {
  getMovies,
  test
}