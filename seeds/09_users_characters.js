exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('users_characters').del()
        .then(function () {
            // Inserts seed entries
            return knex('users_characters').insert([
                { user_id: 3, character_id: 5 },
                { user_id: 17, character_id: 1 },
                { user_id: 16, character_id: 2 },
                { user_id: 10, character_id: 3 },
                { user_id: 7, character_id: 6 },
                { user_id: 5, character_id: 7 },
                { user_id: 9, character_id: 8 },
                { user_id: 8, character_id: 9 },
                { user_id: 14, character_id: 11 },
                { user_id: 15, character_id: 12 },
                { user_id: 13, character_id: 15 },
                { user_id: 12, character_id: 16 },
                { user_id: 6, character_id: 17 },
                { user_id: 11, character_id: 18 },
                { user_id: 18, character_id: 19 },
            ]);
        });
};
