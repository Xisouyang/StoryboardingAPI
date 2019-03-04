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

const editStory = (req, res) => {
  /*
    Find specific story in db through its id,
    update then send back to db
   */
  Story.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(story => {
      console.log(story)
      res.redirect(`/${req.params.id}`)
    })
    .catch(err => {
      console.log(err.message)
    })
}

module.exports = {
   postNewStory,
   getAllStories,
   editStory
}
