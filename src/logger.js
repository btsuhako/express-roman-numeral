const winston = require('winston');

const config = require('./config');

const logger = winston.createLogger({
  level: config.LOG_LEVEL,
  format: winston.format.json(),
  defaultMeta: { service: 'express-roman-numeral' },
  transports: [new winston.transports.Console()],
});

module.exports = { logger };
