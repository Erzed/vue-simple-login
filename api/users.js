var jwt = require('jsonwebtoken');
var SECRET_KEY = 'qdmasdkk12123@1e2kwq12123ikqwidiasmdp1'

var users = {
   'demo@gmail.com' : { password: 'demo', token: ''},
   'admin@gmail.com' : { password: 'admin', token: '' },
   'user@gmail.com' : { password: 'qwerty', token: ''},
}

var Data = {
  login: function(email, password) {
    if (email in users) {
      if (users[email].password == password) {
        var token = jwt.sign({ user: email }, SECRET_KEY);
        users[email].token = token
        return {token: token, user: {email: email}}
      } else {
        return {errors:['Wrong password']}
      }
    } else {
      return {errors:['user does not exist']}
    }
  }
}
module.exports = Data