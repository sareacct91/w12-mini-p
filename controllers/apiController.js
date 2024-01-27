import db from '../db/connectDB.js';

export const getMovies = async (req, res) => {
  const sql = `SELECT * FROM movies;`;

  const [data] = await db.query(sql);

  res.status(200).json({
    message: 'Success',
    data
  });
};

export const getReviews = async (req, res) => {
  const sql = `SELECT * FROM reviews;`;

  const [data] = await db.query(sql);

  res.status(200).json({
    message: 'Success',
    data
  });
};

export const addMovie = async (req, res) => {
  const { movie_name } = req.body;

  if (!movie_name) {
    res.status(400).json({
      message: 'Please provide movie name'
    });
    return;
  }

  const movieSql = `INSERT INTO movies(movie_name) VALUES (?)`;
  const movieVal = [movie_name];

  const reviewSql = `INSERT INTO reviews(movie_id, review) VALUES (LAST_INSERT_ID(), '')`;

  await db.query(movieSql, movieVal);
  await db.query(reviewSql);

  res.status(201).json({
    message: 'Success'
  });
};

export const updateReview = async (req, res) => {
  const { id: reviewID } = req.params;
  const { review: data } = req.body;

  if (!data) {
    res.status(400).json({
      message: 'Please provide movie review'
    });
    return;
  }

  const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
  const value = [data, reviewID];

  await db.query(sql, value);

  res.status(200).json({
    message: 'Review Updated'
  })
};

export const deleteMovie = async (req, res) => {
  const { id: movieID } = req.params;

  const sql = `DELETE FROM movies WHERE id = ?`;
  const value = [movieID];

  await db.query(sql, value);

  res.status(200).json({
    message: 'Movie Deleted'
  })
};