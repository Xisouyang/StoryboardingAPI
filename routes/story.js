const Story = require('../models/story')

const postStory = (req, res) => {
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
    then output it to terminal and client screen
   */
  Story.find()
  .then(stories => {
    console.log(stories)
    res.send(stories)
  })
  .catch(err => {
    console.log(err.message)
  })
}

const getStory = (req, res) => {
  /*
    Find specifc item in db using id
    then output to terminal and client screen
   */
   Story.findById({ _id: req.params.id })
    .then(story => {
      console.log(story)
      res.send(story)
    })
    .catch(err => {
      console.log(err.message)
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

const deleteStory = (req, res) => {
  /*
    Find specific story in db through id
    then delete it
   */
   Story.findOneAndDelete({ _id: req.params.id })
     .then(story => {
       res.redirect(`/`)
     })
     .catch(err => {
       console.log(err.message)
     })
}

module.exports = {
   postStory,
   getAllStories,
   getStory,
   editStory,
   deleteStory
}
