var express = require('express');
var timeout = require('connect-timeout');
var io = require('socket.io');
var config = require('./config');

var app = express();

app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
//app.use(timeout('50s'));

require('./config/express')(app);

require('./routes')(app);

var server = app.listen(config.port, function () {
  console.log("Express server listening on " + config.port);
});

io = io.listen(server);

io.on('connection', function(socket){
  console.log(socket.id);
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
   socket.on('join', function(){
    console.log('user joined');
  });
});
