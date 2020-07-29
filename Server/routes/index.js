var express = require('express');
var router = express.Router();

router.use('/ssp1', require('./ssp1'));

module.exports = router;
