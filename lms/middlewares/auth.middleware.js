const passport = require("passport");
const { allRoles } = require("../config/roles");

const verifyAuth = (req, requiredPermissions, resolve, reject) => async (err, user, info) => {
  if (err || info || !user) {
    return reject(new Error('Unauthorized'));
  }
  req.user = user;
  if (requiredPermissions.length > 0) {
    const userPermissions = allRoles[user.role];
    const hasPermission = requiredPermissions.every((permission) => userPermissions.includes(permission));
    if (!hasPermission) {
      return reject(new Error('Forbidden'));
    }
  }
  resolve();
}

const auth = (...requiredPermissions) => async (req, res, next) => {
  return new Promise((resolve, reject) => {
    passport.authenticate(
      'jwt', 
      { session: false }, 
      verifyAuth(req, requiredPermissions, resolve, reject)
    )(req, res, next);
  })
    .then(() => next())
    .catch((err) => next(err));
}

// const auth = async (req, res, next) => {
//   const authorization = req.headers.authorization;
//   if (!authorization) {
//     return res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized no authorization" });
//   }
//   const token= authorization.split(" ")[1];
//   if (!token) {
//     return res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized no token present" });
//   }
//   try {
//     const payload = verifyToken(token, process.env.JWT_SECRET_KEY);
//     if (!payload) {
//       return res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized invalid token" });
//     }
//     if (payload.type !== 'access') {
//       return res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized invalid token type" });
//     }
//     if (!moment().isBefore(payload.expires)) {
//       return res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized token expired" });
//     }
//     const user = await UserModel.findById(payload.sub);
//     if (!user) {
//       return res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized user not found" });
//     }
  
//     req.user = user;
//   } catch (error) {
//     next(error);
//   }

//   next();
// }

module.exports = auth;