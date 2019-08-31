const express = require('express');
const movieController = require('../controllers').movie;
const JWT = require('../services/jsonwebtoken');
const router = express.Router();

router.get('/', movieController.getList);

router.get('/share/:id', JWT.verifyToken, movieController.share);

module.exports = router;