process.env.PORT = 8888;
process.env.NODE_ENV = 'test';
const server = require('../server');
const request = require('supertest')(server);
const expect = require('chai').expect;

const knexConfig = require('../knexfile')['test'];
const knex = require('knex')(knexConfig);

describe('Tests for users routes', () => {
    before((done) => {
        knex.migrate.rollback().then(() => {
            knex.migrate.latest().then(() => {
                return knex.seed.run()
                    .then(() => done())
                    .catch((err) => done(err));
            });
        });
    });

    it('GET /users should return a list of users', (done) => {
        request.get('/users')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(res.text).to.include('Hegedus');
                done(err);
            });
    });

});