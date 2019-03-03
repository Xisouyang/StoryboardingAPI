// express framework for node server
const express = require('express')
const app = express()

// use handlebars for views
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const indexController = require('./controllers/index')
app.use('/', indexController)

// start up server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("listening on port 3000")
})
