var _ = require('lodash');
var settings = require('../../config/settings.json');
var exec = require('child_process').exec;

module.exports = {
  convert: function (req, res) {
    var input = "C:\\Users\\coreydurthaler\\Documents\\!sites\\KindleSend\\tests\\input\\TheMartian.epub";
    var output = "C:\\Users\\coreydurthaler\\Documents\\!sites\\KindleSend\\tests\\output\\TheMartian.mobi";
    var cmd = "ebook-convert "+ input + " "+ output;

    exec(cmd,{cwd: settings.converter.path}, function (error, stdout, stderr) {
      if (error !== null) {
        console.log('exec error: ' + error);
        res.send('there was an error: '+ error);
      } else {
        res.send('file converted');
        console.log('file converted');
      }
    });
  }
};