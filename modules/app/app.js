'use strict';

const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());

app.use('/people', require('../people/people.router'));
app.use('/pets', require('../pets/pets.router'));

app.get('/', (req, res) => {
  res.send('Hello from Petful!');
});



// app.listen(PORT, () => {
//   console.log(`Listening on ${PORT}.`);
// });


module.exports = app;
