const express = require('express');
const schoolRoute = require('./school.route');
const authRoute = require('./auth.route');

const router = express.Router();

const routes = [
  {
    path: '/schools',
    route: schoolRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
];

routes.forEach((r) => {
  router.use(r.path, r.route);
});

module.exports = router;