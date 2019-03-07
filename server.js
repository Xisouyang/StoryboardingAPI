require('dotenv').config();

// express framework for node server
const express = require('express')
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
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

// setup route controllers
const indexRoute = require('./src/routes/index')
const storyRoute = require('./src/routes/story')
const authRoute = require('./src/routes/auth')

// check validity of token
var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.headers['authorization'] === "undefined" || req.headers['authorization'] === null) {
    console.log(req.headers['authorization'])
    req.user = null;
    console.log("FAIL")
  } else {
    console.log("SUCCESS")
    var token = req.headers['authorization'];
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next();
};

// use routes
app.use(checkAuth);
app.use('/auth', authRoute)
app.use('/', indexRoute)
app.use('/users', storyRoute)

// start up server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("listening on port 3000")
})

module.exports = app
