const jwt = require('jsonwebtoken');

//middleware to check the JWT Token
const auth = async (req, res, next) => {
  // JWT_SECRET_KEY is env variable
  const privateKey = process.env.JWT_SECRET_KEY;
  const authHeader = req.header('Authorization');
  const Token = authHeader ? authHeader.replace('Bearer ', '') : '';
  console.log(Token);

  try {
    jwt.verify(Token, privateKey, function (err, decoded) {
      req.user = decoded;
      if (err) {
        return res.send({
          code: 401,
          message: 'Invalid Token!',
        });
      }

      // otherwise authentication pass, call next()
      next();
    });
  } catch (err) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = auth;
