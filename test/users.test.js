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

    it('GET /users/:id should return info about a user', (done) => {
        request.get('/users/3')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(res.text).to.include('Chris');
                expect(res.body.user.phone).to.equal('512-850-6232');
                expect(res.body.user.email).to.equal('cdcasey@gmail.com');
                done(err);
            });
    });

});