process.env.PORT = 8888;
process.env.NODE_ENV = 'test';
const server = require('../server');
const request = require('supertest')(server);
const expect = require('chai').expect;

const knexConfig = require('../knexfile')['test'];
const knex = require('knex')(knexConfig);

describe('Tests for productions routes', () => {
    before((done) => {
        knex.migrate.rollback().then(() => {
            knex.migrate.latest().then(() => {
                return knex.seed.run()
                    .then(() => done())
                    .catch((err) => done(err));
            });
        });
    });

    it('GET /users/:id/productions should return a list of productions available to a user', (done) => {
        request.get('/users/3/productions')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(res.text).to.include('Romeo and Juliet');
                done(err);
            });
    });

    it('GET /users/:user_id/productions/:id should return info about a production', (done) => {
        request.get('/users/3/productions/1')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(res.body.production.name).to.equal('The Baron\'s Men present Romeo and Juliet');
                done(err);
            });
    });

    it('GET /users/:user_id/productions/:id/cast should return a cast list', (done) => {
        request.get('/users/3/productions/1/cast')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(res.body.cast[0].first_name).to.equal('Chris');
                expect(res.body.cast[0].character).to.equal('Lord Capulet');
                done(err);
            });
    });

});