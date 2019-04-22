const { convertInt } = require('../../services/romanNumeral');

function getRomannumeral(req, res, next) {
  try {
    const query = req.query.query;
    const num = Number.parseInt(query);
    if (Number.isNaN(num)) {
      throw new Error('Cannot parse query as number');
    }
    const result = convertInt(num);
    res.send(result);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getRomannumeral,
};
