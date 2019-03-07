const Story = require('../models/story')
const User = require('../models/user')

const checkLogin = (req, res, next) => {
  if (req.user) {
    next()
  }
  else {
    res.status(400).send("Permission denied")
  }
}

const postUserStory = (req, res) => {
  /*
    instantiate story model instance then save to db
   */
  console.log(req.body)
  console.log(req.params.userId)
  const story = new Story(req.body);
  story.author = req.params.userId
  story.save((err, _) => {
    console.log("saved to db")
    User.findOne({ _id: req.params.userId })
      .then(user => {
        user.stories.unshift( story._id )
        user.save()
      })
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

const getUserStories = (req, res) => {
  /*
    Find all stories pertaining to one user
    and output it to terminal and client
  */
  console.log(req.params.userId);
  const userId = req.params.userId;
  User.findById(userId).populate('stories')
    .then(user => {
      console.log(user.stories);
      res.send(user.stories);
    })
    .catch(err => {
      console.log(err.message);
    })
}

const getUserStory = (req, res) => {
  /*
    Find specifc item in db using id
    then output to terminal and client screen
   */

   Story.findById({ _id: req.params.id })
    .then(story => {
      console.log(story);
      res.send(story);
    })
    .catch(err => {
      console.log(err.message);
    })
}

const editUserStory = (req, res) => {
  /*
    Find specific story in db through its id,
    update then send back to db
   */
  // if
  console.log(req.params.id)
  Story.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(story => {
      console.log(story)
      // res.redirect(`/${req.params.id}`)
      res.send("success: updated story");
    })
    .catch(err => {
      console.log(err.message);
    })
}

const deleteUserStory = (req, res) => {
  /*
    Find specific story in db through id
    then delete it
   */
   const storyId = req.params.id
   const userId = req.params.userId

   User.findOne({ _id: userId })
    .then(user => {
      user.stories = user.stories.filter(keepTheseStories => { !storyId });
      user.save();
    })

    Story.findOneAndDelete({ _id: storyId })
      .then(() => {
        res.send("success: story deleted");
      })
      .catch(err => {
        console.log(err.message);
      })
}

module.exports = {
   checkLogin,
   postUserStory,
   getAllStories,
   getUserStories,
   getUserStory,
   editUserStory,
   deleteUserStory
}
