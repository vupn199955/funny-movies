var jwt = require('jsonwebtoken');

module.exports = {
  createToken(data) {
    return jwt.sign({data}, process.env.SECRET_KEY, {
      expiresIn: 60*60
    });
  },
  //This method as a middleware
  verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(404).send('Unauthorization');
    }
    if (token === 'test_model') { //for testing
      return next();
    }
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (err) {
        return res.status(404).send(err);
      }
      req.user = decoded;
      return next();
    });
  }
}