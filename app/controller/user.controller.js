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
    callback(result);
  });
}

// add user
function addUser (info, callback) {
  findUser(info, callback);
}

module.exports = {
  signUp: function (info) {
    addUser(info, callback);

    function callback (result) {
      if (!result) {
        var password = info.password;
        var newUser = null;
        // md5
        info.password = md5Hash(password);

        newUser = new usersModel(info);
        newUser.save(function (err, newUser) {
          if (err) return console.log(err);
          req.session.user = result;
        });
      }
    }
  },
  signIn: function (info, req, res) {
    findUser(info, callback);

    function callback (result) {
      var state = "",
          data = "";
      // user exist
      if (result) {
        // password right
        if (result.password === md5Hash(info.password)) {
          state = "success";
          data = result;
          req.session.user = result;
        } else {
          state = "fail";
          data = "wrong password"
        }
      } else {
        state = "fail";
        data = "user don't exist";
      }
      res.json({
        state: state,
        data: data
      });
    }
  }
}
