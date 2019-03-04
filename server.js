// express framework for node server
const express = require('express')
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

// Add after body parser initialization!
app.use(expressValidator());

//set db
require('./data/customAPI-db')

// setup route controllers
const indexController = require('./controllers/index')
const storyController = require('./controllers/story')

// use routes
app.use('/', indexController)
app.use('/stories', storyController)

// start up server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("listening on port 3000")
})
