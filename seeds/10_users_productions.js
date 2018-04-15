exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('users_productions').del()
        .then(function () {
            // Inserts seed entries
            return knex('users_productions').insert([
                { user_id: 4, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-04-24', '2018-04-25', '2018-04-26', '2018-04-27']) },
            ]);
        });
};
