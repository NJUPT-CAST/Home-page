var express = require('express');
var router = express.Router();

var usersController = require('../controller/user.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/islog', function(req, res, next) {
  var state = "",
      data = "";
  if (req.session.user) {
    state = "success";
    data = req.session.user;
  } else {
    state = "fail";
    data = "";
  }
  res.json({
    state: state,
    data: data
  });
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
  var userInfo = req.body.data;
  // check the info
  usersController.signIn(userInfo, req, res);
});

router.get('/signout', function(req, res, next) {
  usersController.signOut(req, res);
});

module.exports = router;
