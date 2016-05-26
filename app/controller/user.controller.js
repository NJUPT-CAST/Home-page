var crypto = require('crypto');
var usersModel = require('../model/users.model.js');

// md5 encode
function md5Hash (str) {
  var md5Hash = crypto.createHash("md5");
  md5Hash.update(str);

  return md5Hash.digest("hex");
}

// find user
function findUser (info, callback) {
  var query = usersModel.findOne({
    stuid: info.stuid
  });

  query.then(function (result) {
    // check if stuid used by others
    if (!result) {
      callback();
    } else {

    }
  });
}

// add user
function addUser (info, callback) {
  findUser(info, callback);
}

module.exports = {
  signUp: function (info) {
    addUser(info, callback);

    function callback () {
      var password = info.password;
      var newUser = null;
      // md5
      info.password = md5Hash(password);

      newUser = new usersModel(info);
      newUser.save(function (err, newUser) {
        if (err) return console.log(err);
      });
    }
  },
  signIn: function (info) {
    findUser(info, callback);

    function callback () {
      
    }
  }
}
