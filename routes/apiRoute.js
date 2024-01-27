const apiRouter = require('express').Router();

const { getMovies, getReviews, addMovie, updateReview, deleteMovie, } = require('../controllers/apiController.js');

apiRouter.route('/movies')
  .get(getMovies);

apiRouter.route('/movie-reviews')
  .get(getReviews);

apiRouter.route('/add-movie')
  .post(addMovie);

apiRouter.route('/review/:id')
  .put(updateReview);

apiRouter.route('/movie/:id')
  .delete(deleteMovie);


module.exports = apiRouter;