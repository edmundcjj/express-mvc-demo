const express = require('express');
const handlebars = require('express-handlebars');

// post request libs
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

const cookieParser = require('cookie-parser')


/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();


// post request use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.use(cookieParser());

// Set handlebars to be the default view engine
const handlebarsConfigs = {
  extname: '.handlebars',
  layoutsDir:'views',
  defaultLayout: 'layout'
};

app.engine('.handlebars', handlebars(handlebarsConfigs));
app.set('view engine', '.handlebars');


const dbPool = require('./db');

var routesContext = require('./routes');

routesContext(app, dbPool);

app.get('/', (request, response) => {
	response.send('hello');
});
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));

server.on('close', () => {
  console.log('Closed express server')

  dbPool.pool.end(() => {
    console.log('Shut down connection pool')
  });
});
