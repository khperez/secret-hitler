var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('start', { title: 'Secret Hitler' });
});

router.get('/game', function(req, res, next) {
  res.render('game', { title: 'Game' });
});
router.get('/help', function(req, res, next) {
  res.render('help', { title: 'Secret Hitler'});
});

module.exports = router;
