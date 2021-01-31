'use strict';
const { Queue } = require('../queue/Queue');
const adopters = require('../data/adopter.js');

// Set up initial data.
// --------------------

const adoptersQueue = new Queue();
const adoptersBenchQueue = new Queue();
adopters.slice(-4).forEach(person => adoptersQueue.enqueue(person));
adopters.forEach(person => adoptersBenchQueue.enqueue(person));

// --------------------


const nextPeople = () => {
  const next = adoptersQueue.dequeue();
  const backup = adoptersBenchQueue.dequeue();
  adoptersQueue.enqueue(backup);
  adoptersBenchQueue.enqueue(backup);
  return next; 
};



module.exports = {
  get() {
    // Return all people in the queue.
    return adoptersQueue.all();
  },

  push(person) {
    // Add a person to the queue.
    adoptersQueue.enqueue(person);
  },

  remove() {
    // Remove a person from the queue.
    return nextPeople();
  }
};
