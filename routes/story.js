const Story = require('../models/story')

const postNewStory = (req, res) => {
  console.log(req.body)
  const story = new Story(req.body); // instantiate story model
  story.save((err, post) => { // save to db
    // return res.redirect(`/`); // redirect to root route
    console.log("saved to db")
  })
}

module.exports = { postNewStory }
