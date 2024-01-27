const express = require('express');
const logger = require('./middlewares/logger.js');
const mainRoute = require('./routes/mainRoute.js');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(logger);
app.use(express.json());

app.use('/', mainRoute);

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));