const httpStatus = require("http-status");
const UserModel = require("../models/user.model");
const { generateAuthTokens } = require("./token.controller");

const register = async (req, res) => {
  const { email } = req.body;
  if (await UserModel.isEmailAlreadyTaken(email)) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: 'Email already taken' });
  }
  const user = await UserModel.create(req.body);
  res.status(httpStatus.CREATED).json(user);
}

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: 'No user with such email found' });
  }
  if (!(await user.isPasswordMatch(password))) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: 'Incorrect Password' });
  }
  const tokens = generateAuthTokens(user);
  res.json({ user, tokens });
}

module.exports = {
  register,
  login,
}