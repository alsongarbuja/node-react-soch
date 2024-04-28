const express = require('express');
const bookRoutes = require('./book.route');

const router = express.Router();

const routes = [
  {
    endpoint: '/books',
    route: bookRoutes,
  },
];

routes.forEach((r) => {
  router.use(r.endpoint, r.route);
});

module.exports = router;