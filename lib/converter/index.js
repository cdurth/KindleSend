var _ = require('lodash');
var Q = require('q');
var settings = require('../../config/settings.json');
var exec = require('child_process').exec;

module.exports.convertToMobiQ = function(fileObj) {
    var retObj = {};
    var defer = Q.defer();
    console.log(fileObj);
	var input = settings.converter.uploadpath+fileObj.filename;
    var extension = fileObj.originalname.match('\.[^.]*$');
    var newName = fileObj.originalname.replace(extension[0],'');
    var output = settings.converter.convertedpath + newName +".mobi";
    var cmd = "ebook-convert "+ input + " "+ output;
    //console.log(cmd);
    exec(cmd,{cwd: settings.converter.path}, function (error, stdout, stderr) {
      if (error !== null) {
        console.log('converter error: '+ error);
        return defer.reject(error);
      } else {
          retObj['name'] = newName;
          retObj['path'] = output;
          defer.resolve(retObj);
      }
    });
    
    return defer.promise;
};