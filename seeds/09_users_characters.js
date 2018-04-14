exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('users_characters').del()
        .then(function () {
            // Inserts seed entries
            return knex('users_characters').insert([
                { user_id: 4, character_id: 5 },
            ]);
        });
};
