var _ = require('lodash');
var settings = require('../../config/settings.json');
var converter = require('../../lib/converter');
var emailer = require('../../lib/emailer');

module.exports = {
  upload: function (req, res, next) {
    var file = req.files['book'][0];
    converter
      .convertToMobiQ(file)
      .then(function(result){
        result['email'] = req.body.email;
         emailer
          .sendFileQ(result)
          .then(function(sendRes){
            console.log('after sendFileQ');
            res.send('email sent');
          });
      });
  }
};

        // BLOCK TO DOWNLOAD FILE
        // var fileName = result.name +'.mobi';
        
        // res.download(result.path, function (err){
        //   if(err) {
        //     console.log('failure '+err);
        //   } 
        //   else {
        //     console.log('success');
        //     //res.send('success');
        //   }
        // });