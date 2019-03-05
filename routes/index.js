const express = require('express');
const router = express.Router();

const { rootRoute } = require('../controllers/index')

router.get('/', rootRoute)

module.exports = router
