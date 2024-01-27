import express from 'express';

import logger from './middlewares/logger.js';
import mainRoute from './routes/mainRoute.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(logger);
app.use(express.json());

app.use('/', mainRoute);

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));