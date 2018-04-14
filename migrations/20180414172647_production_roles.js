
exports.up = function (knex, Promise) {
    return knex.schema.createTable('production_roles', (table) => {
        table.increments();
        table.string('name');
        table.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('production_roles');
};
