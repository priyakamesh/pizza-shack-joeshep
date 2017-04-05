
'use strict';

const toppings = require('./toppings');
exports.seed = function(knex, Promise) {
  let toppingsPromises = toppings.map(({topping_name})=>{
    return knex('toppings').insert({topping_name});
  })
  // Deletes ALL existing entries
  return knex('toppings').del()
    .then(function () {
      return Promise.all(toppingsPromises);
    });
};
