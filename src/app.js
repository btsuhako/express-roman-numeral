const express = require('express');
const expressWinston = require('express-winston');
const winston = require('winston');

const config = require('./config');
const { logger } = require('./logger');
const app = express();

// express-winston logger makes sense BEFORE the router
app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.json(),
    level: config.LOG_LEVEL,
  })
);

app.use(require('./api'));

// express-winston errorLogger makes sense AFTER the router.
app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.json(),
    level: config.LOG_LEVEL,
  })
);

app.listen(config.PORT, err => {
  if (err) {
    logger.error(err);
    return;
  }
  logger.info(`express-roman-numeral server is ready on ${config.PORT}`); // TODO use logger with JSON formatting
});
