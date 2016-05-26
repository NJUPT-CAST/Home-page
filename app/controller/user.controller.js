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
        });
      }
    }
  },
  signIn: function (info, res) {
    findUser(info, callback);

    function callback (result) {
      if (result) {
        var state = "",
            data = "";
        if (result.password === md5Hash(info.password)) {
          state = "success";
          data = result;
          res.cookies.user = result;
        } else {
          state = "success";
        }
        res.json({
          state: state,
          data: data
        });
        // console.log(result);
      }
    }
  }
}
