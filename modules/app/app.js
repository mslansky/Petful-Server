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





module.exports = app;
