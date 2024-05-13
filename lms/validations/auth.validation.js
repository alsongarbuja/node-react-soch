const Joi = require('joi');
const password = require('./custom/password');

const registerValidate = {
  body: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().custom(password).required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid('user', 'librarian', 'admin').optional(),
  })
}

const loginValidate = {
  body: Joi.object().keys({
    password: Joi.string().required(),
    email: Joi.string().email().required(),
  })
}

module.exports = {
  registerValidate,
  loginValidate,
}