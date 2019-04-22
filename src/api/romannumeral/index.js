const router = require('express').Router();
const controller = require('./romannumeralController');

router.get('/romannumeral', controller.getRomannumeral); // expects ?query=__ parameter

module.exports = router;
