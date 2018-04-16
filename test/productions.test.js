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
                expect(res.body.productions[0].id).to.equal(1);
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

    it('GET /users/:user_id/productions/:id/blackoutdates should return a list of blackout dates for each cast member', (done) => {
        request.get('/users/3/productions/1/blackoutdates')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(res.body.blackoutDates[0].first_name).to.equal('Chris');
                expect(res.body.blackoutDates[0].character).to.equal('Lord Capulet');
                expect(res.body.blackoutDates[0].blackout_dates).to.deep.equal(["2018-04-24", "2018-04-25", "2018-04-26", "2018-04-27"]);
                done(err);
            });
    });

});