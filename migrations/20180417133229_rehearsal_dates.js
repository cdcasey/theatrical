
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rehearsal_dates', (table) => {
      table.increments();
      table.integer('scene_id');
      table.foreign('scene_id').references('scenes.id').onDelete('CASCADE');
      table.integer('production_id');
      table.foreign('production_id').references('productions.id').onDelete('CASCADE');
      table.string('start_time');
      table.string('end_time');
      table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('rehearsal_dates');
};
