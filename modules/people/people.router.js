'use strict';
const express = require('express');
const json = require('body-parser').json();
const xss = require('xss');

const People = require('./people.service');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(People.get());
});

router.post('/', json, (req, res) => {
  if(!req.body.name){
    res.status(400).json('No Name Found');
  }
  let newAdopter = xss(req.body.name);
  People.push(newAdopter);
  res.status(201).json(newAdopter);
});

module.exports = router;
