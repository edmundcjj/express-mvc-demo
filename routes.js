const users = require('./controllers/users');

module.exports = (app) => {

  /*
   *  =========================================
   *  USERS
   *  =========================================
   */

  app.get('/users/new', users.newform);
  app.post('/users/new', users.new);

}