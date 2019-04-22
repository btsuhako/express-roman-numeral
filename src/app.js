const express = require('express');

const app = express();
const config = require('./config');

app.use(require('./api'));

app.listen(config.PORT, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`express-roman-numeral server is ready on ${config.PORT}`); // TODO use logger with JSON formatting
});
