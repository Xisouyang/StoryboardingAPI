const express = require('express');
const router = express.Router();

const { getAllStories } = require('../controllers/story')
const { getStory } = require('../controllers/story')
const { postStory } = require('../controllers/story')
const { editStory } = require('../controllers/story')
const { deleteStory } = require('../controllers/story')

router.get('/', getAllStories)
router.get('/:id', getStory)
router.post('/new', postStory)
router.put('/:id', editStory)
router.delete('/:id', deleteStory)

module.exports = router
