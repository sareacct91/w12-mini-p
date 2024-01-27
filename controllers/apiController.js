import db from '../db/connectDB.js';

export const getMovies = async (req, res) => {
  const sql = `SELECT * FROM movies;`;

  try {
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
