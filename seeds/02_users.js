const bcryptSync = require('bcrypt');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: 'Hunter', last_name: 'Jefferson', phone: '555-555-555', email: 'hunterjefferson@utexas.edu', password: bcryptSync.hashSync('hunter', 10), role_id: 1 },
        { first_name: 'Tim', last_name: 'Barnes', phone: '555-555-555', email: 'tbarnes62@austin.rr.com', password: bcryptSync.hashSync('tim', 10), role_id: 1 },
        { first_name: 'Chris', last_name: 'Casey', phone: '512-850-6232', email: 'cdcasey@gmail.com', password: bcryptSync.hashSync('chris', 10), role_id: 1 },
        { first_name: 'Liegh', last_name: 'Hegedus', phone: '555-555-555', email: 'liegh@someemail.nope', password: bcryptSync.hashSync('liegh', 10), role_id: 2 },
        { first_name: 'Lindsay', last_name: 'Palinsky', phone: '555-555-555', email: 'lindsay@someemail.nope', password: bcryptSync.hashSync('lindsay', 10), role_id: 2 },
        { first_name: 'Casey', last_name: 'Jones', phone: '555-555-555', email: 'casey@someemail.nope', password: bcryptSync.hashSync('casey', 10), role_id: 2 },
        { first_name: 'Leanna', last_name: 'Holmquist', phone: '555-555-555', email: 'leanna@someemail.nope', password: bcryptSync.hashSync('leanna', 10), role_id: 2 },
        { first_name: 'Laura', last_name: 'Trezise', phone: '555-555-555', email: 'laura@someemail.nope', password: bcryptSync.hashSync('laura', 10), role_id: 2 },
        { first_name: 'Jimmie', last_name: 'Bragdon', phone: '555-555-555', email: 'jimmie@someemail.nope', password: bcryptSync.hashSync('jimmie', 10), role_id: 2 },
        { first_name: 'Eva', last_name: 'McQuade', phone: '555-555-555', email: 'eva@someemail.nope', password: bcryptSync.hashSync('eva', 10), role_id: 2 },
        { first_name: 'Ameer', last_name: 'Mobarak', phone: '555-555-555', email: 'ameer@someemail.nope', password: bcryptSync.hashSync('ameer', 10), role_id: 2 },
        { first_name: 'Christina', last_name: 'Peppas', phone: '555-555-555', email: 'christina@someemail.nope', password: bcryptSync.hashSync('christina', 10), role_id: 2 },
        { first_name: 'Edwin', last_name: 'Wise', phone: '555-555-555', email: 'edwin@someemail.nope', password: bcryptSync.hashSync('edwin', 10), role_id: 2 },
        { first_name: 'Maria', last_name: 'Latiolais', phone: '555-555-555', email: 'maria@someemail.nope', password: bcryptSync.hashSync('maria', 10), role_id: 2 },
        { first_name: 'Levi', last_name: 'Gore', phone: '555-555-555', email: 'levi@someemail.nope', password: bcryptSync.hashSync('levi', 10), role_id: 2 },
        { first_name: 'Darren', last_name: 'Scharf', phone: '555-555-555', email: 'darren@someemail.nope', password: bcryptSync.hashSync('darren', 10), role_id: 2 },
        { first_name: 'Stephen', last_name: 'Cook', phone: '555-555-555', email: 'stephen@someemail.nope', password: bcryptSync.hashSync('stephen', 10), role_id: 2 },
        { first_name: 'Michael', last_name: 'Pratt', phone: '555-555-555', email: 'michael@someemail.nope', password: bcryptSync.hashSync('michael', 10), role_id: 2 },
      ]);
    });
};
