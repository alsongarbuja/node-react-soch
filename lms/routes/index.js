const express = require('express');
const bookRoutes = require('./book.route');
const authRoutes = require('./auth.route');

const router = express.Router();

const routes = [
  {
    endpoint: '/books',
    route: bookRoutes,
  },
  {
    endpoint: '/auth',
    route: authRoutes,
  },
];

routes.forEach((r) => {
  router.use(r.endpoint, r.route);
});

module.exports = router;