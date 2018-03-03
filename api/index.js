var express = require('express');
var router = express.Router();

// middleware that is specific to this router

// define the home page route
// 
var Data = require('./users')



console.log(Data.login('demo@gmail.com', 'demo1'));
console.log(Data.login('demo@gmail.com', 'demo'));
console.log(Data.login('demo@g1mail.com', 'demo'));
console.log(Data.login('demo@g1mail.com', '12demo'));
console.log(Data.login('user@gmail.com', 'qwerty'));


router.post('/login', function(req, res) {
  res.json(users.login(req.body.user))
});
module.exports = router;

