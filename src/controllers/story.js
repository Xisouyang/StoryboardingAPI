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
        res.status(200).send(story)
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
   const userId = req.params.userId;
   User.findById(userId)
    .then(user => {
      Story.findById({ _id: req.params.id})
       .then(story => {

         var storyId = JSON.stringify(story.author)
         storyId = storyId.split('"').join('')

         if (storyId !== userId) {
           return res.status(400).send("invalid path for story")
         }
         res.send(story);
       })
       .catch(err => {
         console.log(err.message);
       })
    })
    .catch(err => {
      console.log(err.message);
    })
}

const editUserStory = async(req, res) => {
  /*
    Find specific story in db through its id,
    update then send back to db
   */
   try {
     const userId = req.params.userId
     const storyId = req.params.id

     const admin = await User.findOne({ username: 'admin'});
     var adminId = JSON.stringify(admin._id);
     adminId = adminId.split('"').join('')

     if (userId === adminId) {
       const story = await Story.findOne({ _id: req.params.id }, req.body, { new: true })
       story.genre = req.body.genre
       story.plot = req.body.plot
       story.conflict = req.body.conflict
       story.resolution = req.body.resolution
       story.character = req.body.character
       story.setting = req.body.setting
       story.save()
       return res.send(`The Story Updated`).status(200)
     } else {
       return res.send('invalid user').status(400)
     }
   } catch(err) {
      return res.send('admin not found').status(500)
   }
}

const deleteUserStory = async(req, res) => {
  /*
    Find specific story in db through id
    then delete it
   */
   try {
     const storyId = req.params.id
     const userId = req.params.userId

     const admin = await User.findOne({ username: 'admin'});
     var adminId = JSON.stringify(admin._id);
     adminId = adminId.split('"').join('')

     if(userId === adminId) {

       const user = await User.findOne({ _id: userId })
       user.stories = user.stories.filter(keepTheseStories => { !storyId })
       user.save()

       const story = await Story.findOneAndDelete({ _id: storyId })
       res.send('success: story deleted').status(200)
     } else {
       return res.send('invalid user').status(400)
     }

   } catch(err) {
     return res.send('Admin not found').status(500)
   }
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
