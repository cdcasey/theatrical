'use strict';

const knex = require('../db/knex');
const Resource = require('./resource');

class Users extends Resource() {};

module.exports = new Employees('users');