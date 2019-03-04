const express = require('express');
const router = express.Router();

const { postNewStory } = require('../routes/story')
const { getAllStories } = require('../routes/story')
const { editStory } = require('../routes/story')

router.post('/new', postNewStory)
router.get('/', getAllStories)
router.put('/:id', editStory)

module.exports = router
