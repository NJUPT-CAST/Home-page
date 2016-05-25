var crypto = require('crypto');
var usersModel = require('../model/users.model.js');

module.exports = {
  findUser: function (info, callback) {
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
  },
  addUser: function (info, res) {
    this.findUser(info, callback);

    function callback () {
      var md5Hash = crypto.createHash("md5");
      var password = info.password;
      var newUser = null;
      // md5
      md5Hash.update(password);
      info.password = md5Hash.digest("hex");

      newUser = new usersModel(info);
      newUser.save(function (err, newUser) {
        if (err) return console.log(err);
      });
    }
  }
}
