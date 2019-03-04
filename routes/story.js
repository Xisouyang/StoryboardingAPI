const Story = require('../models/story')

const postNewStory = (req, res) => {
  /*
    instantiate story model then save to db
   */
  console.log(req.body)
  const story = new Story(req.body);
  story.save((err, post) => {
    console.log("saved to db")
  })
}

const getAllStories = (req, res) => {
  /*
    Find all items in db using the Story schema
    then output it to terminal and screen
   */
  Story.find()
  .then(stories => {
    console.log(stories)
    res.send(stories)
  })
}

module.exports = {
   postNewStory,
   getAllStories
}
