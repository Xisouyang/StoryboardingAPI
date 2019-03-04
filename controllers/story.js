const express = require('express');
const router = express.Router();

const { postNewStory } = require('../routes/story')

router.post('/new', postNewStory)

module.exports = router
