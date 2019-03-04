const express = require('express');
const router = express.Router();

const { signup } = require('../routes/auth')

router.post('/sign-up', signup)

module.exports = router
