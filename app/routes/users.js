var express = require('express');
var router = express.Router();

var usersController = require('../controller/user.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res, next) {
  var userInfo = req.body;
  console.log(userInfo);
  // check the info
  usersController.addUser(userInfo);
  res.json({
    state: 'success',
    data: req.body
  });
});

module.exports = router;
