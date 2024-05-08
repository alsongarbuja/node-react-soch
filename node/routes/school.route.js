const express = require('express');
const validate = require('../middlewares/validate.middleware');
const schoolControllers = require('../controllers/school.controller');
const { createSchoolSchema, updateSchoolSchema, getSchoolSchema } = require('../validations/school.validation');

const router = express.Router();

router.route('/')
  .get(schoolControllers.getSchools)
  .post(validate(createSchoolSchema), schoolControllers.createSchool);

router.route('/:schoolId')
  .get(validate(getSchoolSchema), schoolControllers.getSchool)
  .patch(validate(updateSchoolSchema), schoolControllers.updateSchool)
  .delete(schoolControllers.deleteSchool);

module.exports = router;