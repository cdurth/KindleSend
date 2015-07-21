var express = require('express');
var config = require('./config');

var app = express();

app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);

require('./config/express')(app);

require('./routes')(app);

app.listen(config.port, function () {
  console.log("Express server listening on " + config.port);
});
