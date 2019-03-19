const express = require('express');
const router = express.Router();
const checkLogin = require('../middleware/checkLogin')

const { getAllStories } = require('../controllers/story')
const { getUserStories } = require('../controllers/story')
const { getUserStory } = require('../controllers/story')
const { postUserStory } = require('../controllers/story')
const { editUserStory } = require('../controllers/story')
const { deleteUserStory } = require('../controllers/story')
// const { checkLogin } = require('../controllers/story')

// router.use('*', checkLogin)

router.get('/stories', getAllStories)
router.get('/:userId/stories', checkLogin, getUserStories)
router.get('/:userId/stories/:id', checkLogin, getUserStory)
router.post('/:userId/stories/new', checkLogin, postUserStory)
router.put('/:userId/stories/:id', checkLogin, editUserStory)
router.delete('/:userId/stories/:id', checkLogin, deleteUserStory)

module.exports = router
