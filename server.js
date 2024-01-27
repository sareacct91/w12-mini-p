require('express-async-errors');
const express = require('express');

const logger = require('./middlewares/logger.js');
const errorHandler = require('./middlewares/error-handler.js');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(logger);
app.use(express.json());

const mainRoute = require('./routes/mainRoute.js');
app.use('/', mainRoute);

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));