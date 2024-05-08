const Joi = require('joi');

// Higher order function // clousre
const validate = (schema) => (req, res, next) => {
  const toValidateObject = ['body', 'params'].reduce((obj, key) => {
    if (obj && Object.prototype.hasOwnProperty.call(req, key)) {
      obj[key] = req[key];
    }
    return obj;
  }, {});

  const { error } = Joi.compile(schema).validate(toValidateObject);

  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ');
    next(new Error(errorMessage));
  }

  next();
}

module.exports = validate;
