
exports.up = function (knex, Promise) {
    return createRoles()
        .then(addRolesToUsers);

    function createRoles() {
        return knex.schema.createTable('roles', (table) => {
            table.increments();
            table.string('name');
            table.timestamps(true, true);
        });
    }

    function addRolesToUsers() {
        return knex.schema.alterTable('users', (table) => {
            table.integer('role_id');
            table.foreign('role_id').references('roles.id').onDelete('SET NULL');
        });
    }
};

exports.down = function (knex, Promise) {
    return Promise.all([removeRolesFromUsers(),
                        knex.schema.dropTable('roles')]);

    function removeRolesFromUsers() {
        return knex.schema.alterTable('users', (table) => {
            table.dropColumn('role_id');
        });
    }

};
