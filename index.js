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
app.engine('handlebars', handlebars.create().engine);
app.set('view engine', 'handlebars');

var routesContext = require('./routes');

routesContext(app);

app.get('/', (request, response) => {
	response.send('hello');
});

const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));














