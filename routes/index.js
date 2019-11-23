let books = require('./api/books')

let router = app => {
  app.use('/api/books', books);
};

module.exports = router;