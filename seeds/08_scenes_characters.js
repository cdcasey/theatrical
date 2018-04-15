exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('scenes_characters').del()
        .then(function () {
            // Inserts seed entries
            return knex('scenes_characters').insert([
                { scene_id: 1, character_id: 23 },
                { scene_id: 2, character_id: 1 },
                { scene_id: 2, character_id: 15 },
                { scene_id: 2, character_id: 5 },
                { scene_id: 2, character_id: 17 },
                { scene_id: 2, character_id: 18 },
                { scene_id: 2, character_id: 8 },
                { scene_id: 2, character_id: 19 },
                { scene_id: 2, character_id: 20 },
                { scene_id: 2, character_id: 12 },
                { scene_id: 2, character_id: 11 },
                { scene_id: 2, character_id: 6 },
                { scene_id: 2, character_id: 16 },
                { scene_id: 3, character_id: 5 },
                { scene_id: 3, character_id: 17 },
                { scene_id: 3, character_id: 2 },
                { scene_id: 3, character_id: 18 },
                { scene_id: 4, character_id: 6 },
                { scene_id: 4, character_id: 9 },
                { scene_id: 4, character_id: 7 },
                { scene_id: 5, character_id: 17 },
                { scene_id: 5, character_id: 18 },
                { scene_id: 5, character_id: 3 },

            ]);
        });
};
