import { Router } from 'express';
import apiRoute from './apiRoute.js';

const mainRouter = Router();

mainRouter.use('/api', apiRoute);

export default  mainRouter;