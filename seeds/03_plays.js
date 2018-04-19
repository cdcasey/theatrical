
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('plays').del()
    .then(function () {
      // Inserts seed entries
      return knex('plays').insert([
        { name: 'Romeo and Juliet', author_first_name: 'William', author_last_name: 'Shakespeare' },
        { name: 'Much Ado About Nothing', author_first_name: 'William', author_last_name: 'Shakespeare' },
      ]);
    });
};
