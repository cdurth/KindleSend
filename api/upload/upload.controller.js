var _ = require('lodash');
var settings = require('../../config/settings.json');
var converter = require('../../lib/converter');



module.exports = {
  upload: function (req, res,next) {
    var file = req.file;
    converter
      .convertToMobiQ(file)
      .then(function(result){
        // var options = {
        //   root: settings.converter.convertedpath,
        //   dotfiles: 'deny',
        //   headers: {
        //       'Content-Type': 'application/x-mobipocket-ebook',
        //       'Content-Disposition': 'attachment; '+ result.name
        //   }
        // };
        
        var fileName = result.name +'.mobi';
        
        res.download(result.path, function (err){
          if(err) {
            console.log('failure '+err);
          } 
          else {
            console.log('success');
            //res.send('success');
          }
        });
      });
  }
};