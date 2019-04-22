const router = require('express').Router();

router.get('/health', (req, res) => {
  res.sendStatus(200);
});
router.head('/health', (req, res) => {
  res.sendStatus(200);
});

router.use(require('./romannumeral'));

module.exports = router;
