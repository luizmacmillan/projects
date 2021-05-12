const jwt = require('jsonwebtoken');

const secret = 'theIncredibleSecret';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (email, password) => {
  const token = jwt.sign({ data: [email, password] }, secret, jwtConfig);
  return token;
};

module.exports = {
  generateToken,
};
