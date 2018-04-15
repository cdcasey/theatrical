'use strict';

const knex = require('../db/knex');
const Resource = require('./resource');

class Plays extends Resource() {};

module.exports = new Employees('plays');