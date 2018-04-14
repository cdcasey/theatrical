
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        { name: "Prince Escalus", play_id: 1 },
        { name: "Count Paris", play_id: 1 },
        { name: "Mercutio", play_id: 1 },
        { name: "Page to Paris", play_id: 1 },
        { name: "Lord Capulet", play_id: 1 },
        { name: "Lady Capulet", play_id: 1 },
        { name: "Juliet", play_id: 1 },
        { name: "Tybalt", play_id: 1 },
        { name: "Nurse", play_id: 1 },
        { name: "Peter", play_id: 1 },
        { name: "Gregory", play_id: 1 },
        { name: "Sampson", play_id: 1 },
        { name: "Servant", play_id: 1 },
        { name: "Servant to Capulet", play_id: 1 },
        { name: "Lord Montague", play_id: 1 },
        { name: "Lady Montague", play_id: 1 },
        { name: "Romeo", play_id: 1 },
        { name: "Benvolio", play_id: 1 },
        { name: "Balthasar", play_id: 1 },
        { name: "Abram", play_id: 1 },
        { name: "Friar Lawrence", play_id: 1 },
        { name: "Friar John", play_id: 1 },
        { name: "Chorus", play_id: 1 },
        { name: "Apothecary", play_id: 1 }
      ]);
    });
};