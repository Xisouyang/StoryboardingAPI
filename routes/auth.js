const express = require('express');
const router = express.Router();

const { signup } = require('../controllers/auth')
const { logout } = require('../controllers/auth')
const { login } = require('../controllers/auth')

router.post('/sign-up', signup)
router.post('/login', login)
router.get('/logout', logout)

module.exports = router
