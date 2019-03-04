const express = require('express');
const router = express.Router();

const { getAllStories } = require('../routes/story')
const { getStory } = require('../routes/story')
const { postStory } = require('../routes/story')
const { editStory } = require('../routes/story')
const { deleteStory } = require('../routes/story')

router.get('/', getAllStories)
router.get('/:id', getStory)
router.post('/new', postStory)
router.put('/:id', editStory)
router.delete('/:id', deleteStory)

module.exports = router
