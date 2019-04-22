const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  // LOG_LEVEL: process.env.LOG_LEVEL || 'info',
};
