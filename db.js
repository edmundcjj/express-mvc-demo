const pg = require('pg')

const userModelFunction = require('./models/user')

const configs = {
  user: 'akira',
  host: '127.0.0.1',
  database: 'mvcexpress',
  port: 5432,
};

const dbPool = new pg.Pool(configs)
dbPool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack)
})
let userModelObject =  userModelFunction(dbPool);
//userModelObject.new();

// becomes dbPool
module.exports = {
  pool:dbPool,
  user : userModelObject
}
