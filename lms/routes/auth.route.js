const express = require('express');
const authController = require('../controllers/auth.controller');
const validate = require('../middlewares/validate');
const { registerValidate, loginValidate } = require('../validations/auth.validation');

const router = express.Router();

router.post('/register', validate(registerValidate), authController.register);
router.post('/login', validate(loginValidate), authController.login);

module.exports = router;