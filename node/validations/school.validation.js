const Joi = require('joi');

const createSchoolSchema = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    address: Joi.string().required(),
    contact: Joi.number().optional(),
  }),
}

const updateSchoolSchema = {
  params: Joi.object().keys({
    schoolId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().optional(),
    address: Joi.string().optional(),
    contact: Joi.number().optional(),
  }).min(1),
} 

const getSchoolSchema = {
  params: Joi.object().keys({
    schoolId: Joi.string().required(),
  }),
}

module.exports = {
  createSchoolSchema,
  updateSchoolSchema,
  getSchoolSchema,
}