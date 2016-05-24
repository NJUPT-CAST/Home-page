var usersModel = require('../model/users.model.js');

module.exports = {
  addUser: function (info) {
    var newUser = new usersModel(info);

    newUser.save(function (err, newUser) {
      if (err) return console.log(err);
    });
  }
}
