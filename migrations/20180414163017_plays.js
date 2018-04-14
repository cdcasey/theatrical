
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plays', (table) => {
      table.increments();
      table.string('name');
      table.string('author_first_name');
      table.string('author_last_name');
      table.timestamps(true, true);

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plays');
};
