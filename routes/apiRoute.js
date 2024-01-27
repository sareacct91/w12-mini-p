import { Router } from 'express';
import { getMovies } from '../controllers/apiController.js';

const apiRouter = Router();

apiRouter.route('/movies')
  .get(getMovies);


export default apiRouter;