const express = require('express');
const userController = require('../controllers').user;
const JWT = require('../services/jsonwebtoken');
const router = express.Router();

router.post('/login', userController.login);

router.get('/access-info', JWT.verifyToken, userController.getInfo);

module.exports = router;
