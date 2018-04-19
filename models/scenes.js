'use strict';

const knex = require('../db/knex');
const Resource = require('./resource');
const bcrypt = require('bcrypt-as-promised');

class Scenes extends Resource {

    scenesByProduction(productionId) {
        return knex(this.table)
            .select(`${this.table}.name`)
            .join('productions', 'productions.play_id', `${this.table}.play_id`)
            .where('productions.id', productionId)
            .orderBy(`${this.table}.id`);
    }

    rehearsalDatesByProduction(productionId) {
        return knex(this.table)
            .select(`rehearsal_dates.id`, 'scenes.name', 'start_time', 'end_time', 'characters.name as character')
            .join('scenes_characters', 'scenes_characters.scene_id', 'scenes.id')
            .join('characters', 'scenes_characters.character_id', 'characters.id')
            .join('rehearsal_dates', 'rehearsal_dates.scene_id', 'scenes.id')
            .where('rehearsal_dates.production_id', productionId)
            .orderBy('rehearsal_dates.id');
    }

};

module.exports = new Scenes('scenes');
