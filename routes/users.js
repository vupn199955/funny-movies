const express = require('express');
const bcrypt = require('bcrypt');
const userController = require('../controllers').user;
const router = express.Router();

hashPassword = (pass) => {
  return bcrypt.hashSync(pass, 10)
};

comparePassword = (pass, hash) => {
  return bcrypt.compareSync(pass, hash);
}

router.post('/login', userController.create);

module.exports = router;
