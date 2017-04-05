'use strict';
const { knex } = require('../database');
const sizes = require('./sizes');
// console.log("sizes",sizes);

const sizePromises = sizes.map(({size_name,inches})=>{
  //create knex method for each element in array
  return knex('sizes').insert({size_name,inches });
});

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sizes').del()
    .then(()=> {
      // Inserts seed entries
      return Promise.all(sizePromises);
    });
};
