const apiRouter = require('express').Router();

const { getMovies, test } = require('../controllers/apiController.js');

apiRouter.route('/movies')
  .get(getMovies);

apiRouter.route('/test')
  .get(test);

module.exports = apiRouter;