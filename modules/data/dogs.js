'use strict';



const dogs = [
  {
    age: 1,
    breed: 'Bulldog',
    description: 'Loving brown bully puppy',
    gender: 'Female',
    imageURL: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    name: 'Frida',
    story: 'Was once pet by Ryan Gosling himself'
  },
  {
    age: 3,
    breed: 'weiner dog',
    description: 'blonde weiner dog with long hair',
    gender: 'Female',
    imageURL: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
    name: 'Elle Woods',
    story: 'Is studying so hard to get into Harvard Law School!'
  },
  {
    age: 9,
    breed: 'husky',
    description: 'blonde husky with piercing blue eyes',
    gender: 'Male',
    imageURL: 'https://images.unsplash.com/photo-1563889958751-bac9d543bdbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    name: 'Gruff',
    story: 'Previously a secret service agent for Former First Dogs'
  },
  {
    age: 3,
    breed: 'mutt',
    description: 'white small bodied dog with beautiful smile',
    gender: 'Male',
    imageURL: 'https://images.unsplash.com/photo-1517983809300-b5e793a8c5c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
    name: 'Dakota',
    story: 'Trained to rescue skiers from avalanches'
  },
  {
    age: 2,
    breed: 'hound',
    description: 'black with brown and white patterns',
    gender: 'Female',
    imageURL: 'https://images.unsplash.com/photo-1574621950125-8ef3c39f6ec1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    name: 'Molly',
    story: 'Fashionista in training, she models the latest active dog wear'
  },
  {
    age: 9,
    breed: 'terrier',
    description: 'black and grey wirehair',
    gender: 'Male',
    imageURL: 'https://images.unsplash.com/photo-1583230672061-4eced38087a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    name: 'Chip',
    story: 'Is terrified of thunderstorms, but will always cuddle up when you read a book!'
  },
  {
    age: 6,
    breed: 'french bulldog',
    description: 'black and grey frenchie',
    gender: 'Female',
    imageURL: 'https://images.unsplash.com/photo-1568034097741-fbbfdcca24ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    name: 'Rose',
    story: 'Is a hardworking mom to three pups! She does it all'
  },
  {
    age: 2,
    breed: 'Yorkie',
    description: 'blonde with long hair and even longer tongue',
    gender: 'Male',
    imageURL: 'https://images.unsplash.com/photo-1547494911-2aa9e3fad3b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    name: 'Tink',
    story: 'Won a Todo look alike contest for Halloween one year'
  },
  {
    age: 5,
    breed: 'Dalmation',
    description: 'classic black and white spots',
    gender: 'Male',
    imageURL: 'https://images.unsplash.com/photo-1495096848005-d77907109d78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    name: 'Lucky',
    story: 'Narrowly escaped becoming a coat! Has 100 siblings'
  },
  {
    age: 6,
    breed: 'Black Lab',
    description: 'classic black sleek coat',
    gender: 'Female',
    imageURL: 'https://images.unsplash.com/photo-1516383074327-ac4841225abf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    name: 'Princess Leia',
    story: 'missing her home planet of Alderaan'
  },
  {
    age: 6,
    breed: 'Pomeranian',
    description: 'white long hair dog with long pink tongue',
    gender: 'Male',
    imageURL: 'https://images.unsplash.com/photo-1532627744246-d88dcbcf9541?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
    name: 'Grilled Cheese',
    story: 'is a World Champion hot-dog eating contestant'
  }

];

module.exports = dogs;