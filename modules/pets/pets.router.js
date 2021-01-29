'use strict';
const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  
  Pets.getAll(req.param.type);
});

router.delete('/', json, (req, res) => {
  
  Pets.dequeue(req.param.types);
});

module.exports = router;
