'use strict';

const knex = require('../db/knex');
const Resource = require('./resource');
const bcrypt = require('bcrypt-as-promised');

class Users extends Resource {

  getByEmail(email){
    return knex(this.table).where('email', email).first();
  }
  // authenticate(email, password){
  //   return bcrypt.compare()
  // }
};

module.exports = new Users('users');
