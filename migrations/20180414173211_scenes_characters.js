
exports.up = function (knex, Promise) {
    return knex.schema.createTable('scenes_characters', (table) => {
        table.increments();
        table.integer('scene_id');
        table.foreign('scene_id').references('scenes.id').onDelete('CASCADE');
        table.integer('character_id');
        table.foreign('character_id').references('characters.id').onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('scenes_characters');
};
