const mongoose = require('mongoose');
const app = require('./app');

const PORT = 5000;
let server;

mongoose.connect('mongodb://localhost:27017/soch_lms_db', {})
  .then(() => {
  console.log('Connected to mongodb');
  server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
  });
});