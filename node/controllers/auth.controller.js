const httpStatus = require("http-status");
const { UserModel } = require("../models");

const register = async (req, res) => {
  const { email } = req.body;
  if (await UserModel.isEmailAlreadyTaken(email)){
    return res.status(httpStatus.BAD_REQUEST).json({ message: "email already taken "});
  }
  const user = await UserModel.create(req.body);
  res.status(httpStatus.CREATED).json(user);
}

const login = async (req, res) => {}

module.exports = {
  register,
  login,
}