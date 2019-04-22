const express = require('express');

const app = express();

app.use(require('./api'));

app.listen(3000, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`express-roman-numeral server is ready on 3000`); // TODO use logger with JSON formatting
});
