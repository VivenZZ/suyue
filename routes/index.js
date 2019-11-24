let books = require('./api/books');
let users = require('./api/users');

let router = app => {
  app.use('/api/books', books);
  app.use('/api/users', users);
};

module.exports = router;