const pg = require('pg')

const user = require('./models/user')

const configs = {
  user: 'akira',
  host: '127.0.0.1',
  database: 'mvcexpress',
  port: 5432,
};

const pool = new pg.Pool(configs)

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack)
})

// becomes dbPool
module.exports = {
  pool:pool,
  user : user(pool),
  //paramsokemon : pokemon(pool),
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}