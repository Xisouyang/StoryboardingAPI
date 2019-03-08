const rootRoute = (req, res) => {
  res.render('home', {msg: 'StoryboardingAPI'});
}

module.exports = { rootRoute }
