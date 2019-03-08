const express = require('express');
const router = express.Router();

const { signup } = require('../controllers/auth')
// const { adminSignup } = require('../controllers/auth')
const { login } = require('../controllers/auth')

router.post('/sign-up', signup)
// router.post('/admin/sign-up', adminSignup)
router.post('/login', login)

module.exports = router
