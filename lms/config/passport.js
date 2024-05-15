const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const UserModel = require('../models/user.model');
const jwtOptions = {
  secretOrKey: process.env.JWT_SECRET_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}
const verify = async (payload, done) => {
  try {
    if (payload.type !== 'access') {
      throw new Error('Invalid token type');
    }
    const user = await UserModel.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
}
const jwtStrategy = new JwtStrategy(jwtOptions, verify);
module.exports = { jwtStrategy }