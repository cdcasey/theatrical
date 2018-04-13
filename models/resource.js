'use strict';

const knex = require('../db/knex');


class Resource {
    constructor(table) {
        this.table = table;
    }

    all() {
        return knex(this.table).orderBy('id');
    }

    getById(id) {
        return knex(this.table).where('id', id).first();
    }

    create(data) {
        return knex(this.table).insert(data).returning('*');
    }

    update(id, data) {
        return knex(this.table).where('id', id).update(data);
    }

    delete(id) {
        return this.getById(id).del();
    }
}

module.exports = Resource;