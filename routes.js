const users = require('./controllers/users');

module.exports = (app) => {

  /*
   *  =========================================
   *  USERS
   *  =========================================
   */

  // user register form
  app.get('/users/new', users.newform);

  //create user
  app.post('/users/new', users.new);

  //get a single user
  app.get('/users/:id', users.get);
}