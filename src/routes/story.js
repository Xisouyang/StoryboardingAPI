const express = require('express');
const router = express.Router();

const { getAllStories } = require('../controllers/story')
const { getUserStories } = require('../controllers/story')
const { getUserStory } = require('../controllers/story')
const { postUserStory } = require('../controllers/story')
const { editUserStory } = require('../controllers/story')
const { deleteUserStory } = require('../controllers/story')
const { checkLogin } = require('../controllers/story')

router.use('*', checkLogin)

router.get('/stories', getAllStories)
router.get('/:userId/stories', getUserStories)
router.get('/:userId/stories/:id', getUserStory)
router.post('/:userId/stories/new', postUserStory)
router.put('/:userId/stories/:id', editUserStory)
router.delete('/:userId/stories/:id', deleteUserStory)

module.exports = router
