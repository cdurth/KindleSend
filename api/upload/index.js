var express = require('express');
var controller = require('./upload.controller');
var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/convert')
  },
  filename: function (req, file, cb) {
    var extension = file.originalname.match('\.[^.]*$');
    cb(null, file.fieldname + '-' + Date.now()+extension[0]);
  }
});

var upload = multer({ storage: storage });



var router = express.Router();

router.post('/', upload.single('book'), controller.upload);

module.exports = router;
