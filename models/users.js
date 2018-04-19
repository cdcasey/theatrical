'use strict';

const knex = require('../db/knex');
const Resource = require('./resource');
const bcrypt = require('bcrypt-as-promised');

class Users extends Resource {

  getByEmail(email) {
    return knex(this.table).where('email', email).first();
  }

  getByEmailOrName(email, firstName, lastName) {
    return this.getByEmail(email).orWhere({ first_name: firstName, last_name: lastName });
  }

};

module.exports = new Users('users');
