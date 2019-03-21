require('dotenv').config();

// express framework for node server
const express = require('express')
var cookieParser = require('cookie-parser');
const app = express()

// use handlebars for views
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add this after you initialize express.
app.use(cookieParser());

// Add after body parser initialization!
app.use(expressValidator());

//set db
require('./src/data/customAPI-db')

// create admin user
require('./lib/admin')()

// setup route controllers
const indexRoute = require('./src/routes/index')
const storyRoute = require('./src/routes/story')
const authRoute = require('./src/routes/auth')

var checkAuth = require('./src/middleware/checkAuth')

// use routes
app.use(checkAuth);
app.use('/api/auth', authRoute)
app.use('/api', indexRoute)
app.use('/api/users', storyRoute)

// start up server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("listening on port 3000")
})

module.exports = app
