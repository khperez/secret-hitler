var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('start', { title: 'Secret Hitler' });
});

router.get('/game', function(req, res, next) {
  res.render('game', { title: 'Game' });
});
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Secret Hitler' });
});
router.get('/lobby', function(req, res, next) {
  res.render('lobby', { title: 'Secret Hitler' });
});
router.get('/help', function(req, res, next) {
  res.render('help', { title: 'Secret Hitler'});
});

router.post('/create-room', function(req, res, next) {
    const username = req.body.username;
    console.log("Created new room for " + username);
    res.render('lobby', { username: username })
    res.end();
});

module.exports = router;
