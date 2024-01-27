import { Router } from 'express';
import { addMovie, deleteMovie, getMovies, getReviews, updateReview } from '../controllers/apiController.js';

const apiRouter = Router();

apiRouter.route('/movies')
  .get(getMovies);

apiRouter.route('/movie-reviews')
  .get(getReviews)

apiRouter.route('/add-movie')
  .post(addMovie);

apiRouter.route('/review/:id')
  .put(updateReview);

apiRouter.route('/movie/:id')
  .delete(deleteMovie);

export default apiRouter;