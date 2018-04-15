
exports.up = function (knex, Promise) {
    return knex.schema.createTable('characters', (table) => {
        table.increments();
        table.string('name');
        table.integer('play_id');
        table.foreign('play_id').references('plays.id').onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('characters');
};
