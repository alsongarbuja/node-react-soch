const jwt = require('jsonwebtoken');
const moment = require('moment');

const createToken = (userId, expiresIn, type, secret) => {
  const payload = {
    sub: userId,
    iat: moment().unix(),
    exp: expiresIn.unix(),
    type: type,
  }
  return jwt.sign(payload, secret);
}

const generateAuthTokens = (user) => {
  const accessExpires = moment().add(1, 'minute');
  const accessToken = createToken(user.id, accessExpires, 'access', process.env.JWT_SECRET_KEY);

  const refreshExpires = moment().add(3, 'minutes');
  const refreshToken = createToken(user.id, refreshExpires, 'refresh', process.env.JWT_SECRET_KEY);

  return {
    tokens: {
      accessToken,
      refreshToken,
    }
  }
}

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
}

module.exports = {
  createToken,
  generateAuthTokens,
  verifyToken,
}