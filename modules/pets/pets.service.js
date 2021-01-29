'use strict';
const Queue = require('../queue/Queue');
const cats = require('./cats.js');
const dogs = require('./dogs.js');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

cats.forEach(cat => pets.cats.enqueue(cat));
dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  getAll(type) {
    // Return the pets next in line to be adopted.
    return pets[type].showAll();
  },

  get(type) {
    // Return the pets next in line to be adopted.
    return pets[type].show();
  },

  dequeue(type) {
    // Remove a pet from the queue.
    return pets[type].dequeue();
  }
};
