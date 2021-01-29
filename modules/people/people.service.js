'use strict';
const Queue = require('../queue/Queue');
const adopters = require('./adopter.js');

// Set up initial data.
// --------------------

const adoptersQueue = new Queue();
adopters.forEach(person => adoptersQueue.enqueue(person));

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    return adoptersQueue.showAll();
  },

  push(person) {
    // Add a person to the queue.
    adoptersQueue.enqueue(person);
  },

  remove() {
    // Remove a person from the queue.
    adoptersQueue.dequeue();
  }
};
