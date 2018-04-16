exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('productions').del()
        .then(function () {
            // Inserts seed entries
            return knex('productions').insert([
                { name: 'The Baron\'s Men present Romeo and Juliet', play_id: 1, performance_dates: JSON.stringify(['2018-05-04', '2018-05-05', '2018-05-11', '2018-05-12', '2018-05-17', '2018-05-18', '2018-05-19', '2018-05-24', '2018-05-25', '2018-05-26']), rehearsal_dates: null },
            ]);
        });
};
