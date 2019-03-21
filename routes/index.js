var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('start', { title: 'Secret Hitler' });
});

router.get('/home', function(req, res, next) {
  res.render('homepage', { title: 'Home' });
});

module.exports = router;
