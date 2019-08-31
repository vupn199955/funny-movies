const User = require('../models').Users;
const JWT = require('../services/jsonwebtoken');

module.exports = {
  create(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send("Missing field!");
    }
    const passHash = this.hashPassword(password);
    try {
      User.findOrCreate(
        {where: { username }, defaults: { password: passHash }}
      )
      .spread((user, created) => {
        if (!created) {
          const isCorrectPass = this.comparePassword(password, user.password);
          if (!isCorrectPass) {
            return res.status(401).send('Incorrent password!');
          }
        }
        var token = JWT.createToken(user);
        return res.status(200).send({token});
      })
    } catch(err) {
      return res.status(500).send(err);
    };
  },
  hashPassword(pass) {
    return bcrypt.hashSync(pass, 10)
  },
  comparePassword(pass, hash){
    return bcrypt.compareSync(pass, hash);
  }
}