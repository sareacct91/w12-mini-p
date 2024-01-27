const mainRouter = require('express').Router();

const apiRoute = require('./apiRoute.js');''

mainRouter.use('/api', apiRoute);

module.exports = mainRouter;