
exports.up = function (knex, Promise) {
    return knex.schema.createTable('productions', (table) => {
        table.increments();
        table.string('name');
        table.integer('play_id');
        table.foreign('play_id').references('plays.id').onDelete('SET NULL');
        table.jsonb('performance_dates');
        table.jsonb('rehearsal_dates');
        table.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('productions');
};
