
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_productions', (table) => {
        table.increments();
        table.integer('user_id');
        table.foreign('user_id').references('users.id').onDelete('CASCADE');
        table.integer('production_id');
        table.foreign('production_id').references('productions.id').onDelete('CASCADE');
        table.integer('production_role_id');
        table.foreign('production_role_id').references('production_roles.id').onDelete('CASCADE');
        table.jsonb('blackout_dates');
        table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_productions');
};
