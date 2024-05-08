const express = require('express'); // importing the express module
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express(); // creating an express app

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world !!!');
});

app.use('/api', routes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

mongoose.connect('mongodb://localhost:27017/node_school_db', {}).then(() => {
  console.log('MONGODB conntected');
  app.listen(5000, () => {
    console.log('Server running on PORT 5000');
  }); // listening to the port 5000
}).catch((err) => {
  console.log(err);
});
