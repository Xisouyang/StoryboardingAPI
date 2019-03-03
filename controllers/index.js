const express = require('express');
const router = express.Router();
const { rootRoute } = require('../routes/index')

router.get('/', rootRoute)

module.exports = router
