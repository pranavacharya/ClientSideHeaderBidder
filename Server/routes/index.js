var express = require('express');
var router = express.Router();

router.use('/ssp1', require('./ssp1'));
router.use('/ssp2', require('./ssp2'));

module.exports = router;
