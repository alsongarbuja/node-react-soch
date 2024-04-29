const Joi = require('joi');

const createBook = {
  body: Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    year: Joi.number().required(),
    edition: Joi.number().optional(),
  }),
}

const updateBook = {
  body: Joi.object({
    title: Joi.string().optional(),
    author: Joi.string().optional(),
    year: Joi.number().optional(),
    edition: Joi.number().optional(),
  }).min(1),
}

module.exports = {
  createBook,
  updateBook,
}