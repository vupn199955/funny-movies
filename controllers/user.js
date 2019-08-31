const User = require('../models').Users;
const JWT = require('../services/jsonwebtoken');
const bcrypt = require('bcrypt');

function hashPassword(pass) {
  return bcrypt.hashSync(pass, 10)
};

function comparePassword(pass, hash){
  return bcrypt.compareSync(pass, hash);
};

module.exports = {
  getInfo(req, res) {
    res.status(200).send({ username: req.user.data.username });
  },
  login(req, res) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).send("Missing field!");
      }
      const passHash = hashPassword(password);
    
      User.findOrCreate(
        {where: { username }, defaults: { password: passHash }}
      )
      .spread((user, created) => {
        if (!created) {
          const isCorrectPass = comparePassword(password, user.password);
          if (!isCorrectPass) {
            return res.status(401).send('Incorrent password!');
          }
        }
        var token = JWT.createToken(user);
        return res.status(200).send({token, username : user.username});
      })
    } catch(err) {
      return res.status(500).send(err);
    };
  }
}