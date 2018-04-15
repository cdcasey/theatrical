exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('users_productions').del()
        .then(function () {
            // Inserts seed entries
            return knex('users_productions').insert([
                { user_id: 4, production_id: 1, production_role_id: 1, blackout_dates: null },
                { user_id: 3, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-04-24', '2018-04-25', '2018-04-26', '2018-04-27']) },
                { user_id: 17, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-04-27', '2018-04-28']) },
                { user_id: 16, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-05-01']) },
                { user_id: 10, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-05-02']) },
                { user_id: 7, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-05-03']) },
                { user_id: 5, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-04-15']) },
                { user_id: 9, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-04-16']) },
                { user_id: 8, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-04-17']) },
                { user_id: 14, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-04-18']) },
                { user_id: 15, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-04-19']) },
                { user_id: 13, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-04-20']) },
                { user_id: 12, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-04-18', '2018-04-22']) },
                { user_id: 6, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-04-22']) },
                { user_id: 11, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-04-23']) },
                { user_id: 18, production_id: 1, production_role_id: 2, blackout_dates: JSON.stringify(['2018-04-25']) },
            ]);
        });
};
