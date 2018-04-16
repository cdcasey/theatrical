'use strict';

const knex = require('../db/knex');
const bcryptSync = require('bcrypt');

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
        this.validateData(data);
        return knex(this.table).insert(data).returning('*');
    }

    update(id, data) {
        this.validateData(data);
        return knex(this.table).where('id', id).update(data);
    }

    delete(id) {
        return this.getById(id).del();
    }

    validateData(data) {
        for (const key in data) {
            if (!data[key]) {
                delete data[key];
            }
            if (key === 'password') {
                data[key] = bcryptSync.hashSync(data[key], 10);
            }
        }
    }

}

module.exports = Resource;