var express = require('express');
var router = express.Router();

var usersController = require('../controller/user.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res, next) {
  var userInfo = req.body;
  // check the info
  usersController.signUp(userInfo);
  res.json({
    state: 'success',
    data: req.body
  });
});

router.post('/signin', function(req, res, next) {
  var userInfo = req.body;
  console.log(userInfo);
  // check the info
  usersController.signIn(userInfo);
  res.json({
    state: 'success',
    data: req.body
  });
});

module.exports = router;
