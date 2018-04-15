'use strict';

const knex = require('../db/knex');
const Resource = require('./resource');

class Productions extends Resource() {};

module.exports = new Employees('productions');