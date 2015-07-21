module.exports = function(app) {
  // Insert routes below
  app.use('/api/convert', require('./api/convert'));
  app.use('/api/upload', require('./api/upload'));
  app.route('/')
  .get(function(req, res) {
    res.render('index.html');
  });
};
