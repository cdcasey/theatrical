
exports.up = function (knex, Promise) {
    return knex.schema.createTable('scenes_characters', (table) => {
        table.increments();
        table.integer('scene_id');
        table.integer('character_id');
        table.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('scenes_characters');
};
