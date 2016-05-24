var mongoose = require('mongoose');

var userSchema  = mongoose.Schema({
  stuid: String,
  name: String,
  password: String
});

var user = mongoose.model('user', userSchema);

module.exports = user;
