'use strict';

const cats = [
  {
    age: 1,
    breed: 'Tabby',
    description: 'Loving brown tabby girl with striking green eyes',
    gender: 'Female',
    imageURL: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    name: 'Cleo',
    story: 'Found in the Eiffle Tower! Loves to chase mice.'
  },
  {
    age: 7,
    breed: 'Russian Blue',
    description: 'Silly grey princess, used to the good life',
    gender: 'Female',
    imageURL: 'https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    name: 'Anastasia',
    story: 'Rumor has it, she is a direct descendant of the Russian Tsar cat empire!'
  },
  {
    age: 4,
    breed: 'Persian',
    description: 'Rare black Persian with golden eyes and tiny paws',
    gender: 'Male',
    imageURL: 'https://images.unsplash.com/photo-1581460000963-755eec994cf0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    name: 'Toothless',
    story: 'Traveled with Cirque Du Soilel as an acroCAT'
  },
  {
    age: 0,
    breed: 'Calico',
    description: 'Smallest orange and black Calico Kitten!',
    gender: 'Male',
    imageURL: 'https://images.unsplash.com/photo-1603349136483-c9087327668c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    name: 'Rum Tum Tugger',
    story: 'A most curious cat, if you give him a rat he would rather have a mouse'
  },
  {
    age: 5,
    breed: 'Bengal',
    description: 'Golden orange bengal with fierce teeth',
    gender: 'Male',
    imageURL: 'https://images.unsplash.com/photo-1516750484197-6b28d10c91ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    name: 'Orion',
    story: 'Found hunting mice in the Hawaiian Mauna Kea Observatory'
  },
  {
    age: 2,
    breed: 'Shorthair',
    description: 'Smoky grey with bright white patch',
    gender: 'Female',
    imageURL: 'https://images.unsplash.com/photo-1563210642-282d42ba500d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    name: 'Smoky',
    story: 'Lived in the Rocky Moutain National Forest visitors center '
  },
  {
    age: 3,
    breed: 'Calico',
    description: 'Black calico with white and orange spots',
    gender: 'Female',
    imageURL: 'https://images.unsplash.com/photo-1582725461742-8ecd962c260d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    name: 'Pumpkin',
    story: 'Rescued orphans from a well by altering the town officers! A true hero!'
  },
  {
    age: 9,
    breed: 'Shorthair',
    description: 'White shorthair with black ears and pink nose',
    gender: 'male',
    imageURL: 'https://images.unsplash.com/photo-1575736233228-1cafc5f71a5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    name: 'Samwise',
    story: 'Last seen embarking on a heroic adventure to save middle earth'
  },
  {
    age: 6,
    breed: 'Orange Tabby',
    description: 'bright orange stripes with loving eyes',
    gender: 'male',
    imageURL: 'https://images.unsplash.com/photo-1597891829398-39c7205d81a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    name: 'Tigger',
    story: 'Used to work in the childrens hospital as an emotional support kitty'
  },
  {
    age: 2,
    breed: 'Longhair',
    description: 'dark brown with white and gleeming green eyes',
    gender: 'female',
    imageURL: 'https://images.unsplash.com/photo-1611489287971-be32508d2d92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    name: 'Belatrix',
    story: 'might have previously been a voldemort supporter, a little bit shifty'
  },

  
];

module.exports = cats;