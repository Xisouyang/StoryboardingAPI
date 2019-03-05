const express = require('express');
const router = express.Router();

const { getUserStories } = require('../controllers/story')
const { getUserStory } = require('../controllers/story')
const { postUserStory } = require('../controllers/story')
const { editUserStory } = require('../controllers/story')
const { deleteUserStory } = require('../controllers/story')

router.get('/stories', getUserStories)
router.get('/stories/:id', getUserStory)
router.post('/:userId/stories/new', postUserStory)
router.put('/stories/:id', editUserStory)
router.delete('/:userId/stories/:id', deleteUserStory)

module.exports = router
