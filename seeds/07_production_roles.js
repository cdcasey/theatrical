exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('production_roles').del()
        .then(function () {
            // Inserts seed entries
            return knex('production_roles').insert([
                { name: 'director' },
                { name: 'actor' },
            ]);
        });
};
