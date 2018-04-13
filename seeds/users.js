const bcryptSync = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Robert', last_name: 'Deike', phone: '555-555-555', email: 'robert@someemail.nope', password: bcryptSync.hashSync('robert', 10)},
        {first_name: 'Hunter', last_name: 'Jefferson', phone: '555-555-555', email: 'hunterjefferson@utexas.edu', password: bcryptSync.hashSync('hunter', 10)},
        {first_name: 'Tim', last_name: 'Barnes', phone: '555-555-555', email: 'tbarnes62@austin.rr.com', password: bcryptSync.hashSync('tim', 10)},
        {first_name: 'Chris', last_name: 'Casey', phone: '512-850-6232', email: 'cdcasey@gmail.com', password: bcryptSync.hashSync('chris', 10)},
      ]);
    });
};
