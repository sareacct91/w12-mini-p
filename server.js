// This is being use to handle async erros
import asyncEhandler from 'express-async-errors';
import express from 'express';

import logger from './middlewares/logger.js';
import {errorHandler} from './middlewares/errorHandler.js';
import mainRoute from './routes/mainRoute.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(logger);
app.use(express.json());

app.use('/', mainRoute);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));