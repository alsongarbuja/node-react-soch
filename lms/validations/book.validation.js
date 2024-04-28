const Joi = require('joi');

const createBook = {
  body: Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    year: Joi.number().required(),
    edition: Joi.number().optional(),
  }),
}

module.exports = {
  createBook,
}