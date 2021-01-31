'use strict';
const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/cats', (req, res) => {
  
  Pets.getAll('cats');
});

router.get('/dogs', (req, res) => {
  
  res.status(200).json(Pets.getAll('dogs'));
});

router.get('/dogs/next', (req, res) => {
  res.status(200).json(Pets.get('dogs'));
});

router.get('/cats/next', (req, res) => {
  res.status(200).json(Pets.get('cats'));
});


router.delete('/', json, (req, res) => {
  
  Pets.dequeue(req.param.types);
});

module.exports = router;
