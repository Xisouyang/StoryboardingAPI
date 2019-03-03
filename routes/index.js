const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {msg: 'CustomAPI'});
})

module.exports = router;
