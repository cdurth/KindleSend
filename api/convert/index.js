var express = require('express');
var controller = require('./convert.controller');

var router = express.Router();

router.get('/', controller.convert);

module.exports = router;
