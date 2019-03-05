const rootRoute = (req, res) => {
  res.render('home', {msg: 'CustomAPI'});
}

module.exports = { rootRoute }
