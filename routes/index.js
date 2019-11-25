let books = require('./api/books');
let users = require('./api/users');
let view = require('./api/view');

let router = app => {
  app.use('/api/books', books);
  app.use('/api/users', users);
  app.use('/api/view', view);
};

module.exports = router;