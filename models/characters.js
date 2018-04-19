'use strict';

const knex = require('../db/knex');
const Resource = require('./resource');

class Characters extends Resource {
    byPlayId(playId) {
        return knex(this.table)
            .where('play_id', playId)
            .orderBy('id');
    }
};

module.exports = new Characters('characters');