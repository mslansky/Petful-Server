'use strict';
const { Queue } = require('../queue/Queue');
const cats = require('../data/cats.js');
const dogs = require('../data/dogs.js');



const pets = {
  'catsCount': 0,
  'dogsCount': 0,
  'cats': new Queue(),
  'dogs': new Queue()
};

cats.forEach(cat => pets.cats.enqueue(cat));
dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

const nextDog = () => {
  const next = pets['dogs'].dequeue();
  pets['dogs'].enqueue(next);
  return next; 
};


const nextCat = () => {
  const next = pets['cats'].dequeue();
  pets['cats'].enqueue(next);
  return next; 
};




module.exports = {
  getAll(type) {
   
    return pets[type].all();
  },

  get(type) {
    if(type === 'cats'){
      return nextCat();
    }else{
      return nextDog();
    }
  },

  dequeue(type) {
    // Remove a pet from the queue.
    return pets[type].dequeue();
  }
};
