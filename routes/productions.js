'use strict';

const express = require('express');
const router = express.Router({ mergeParams: true });
const userModel = require('../models/users');
const productionsModel = require('../models/productions');
const scenesModel = require('../models/scenes');
const charactersModel = require('../models/characters');
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
    productionsModel.byUser(req.params.user_id)
        .then((productions) => {
            res.json({ productions })
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id', (req, res, next) => {
    productionsModel.getById(req.params.id)
        .then((production) => {
            res.json({ production })
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/:id', (req, res, next) => {
    // console.log("BODY", req.body);
    productionsModel.getById(req.params.id)
        .then((production) => {
            if (req.body.type === 'performance') {
                let performanceDates = production.performance_dates;
                performanceDates.push(req.body.date);
                productionsModel.update(req.params.id, { performance_dates: JSON.stringify(performanceDates) })
                    .then((data) => {
                        res.redirect(req.originalUrl.split('?')[0] + '/admin');
                    }).catch((err) => {
                        next(err);
                    });
            } else if (req.body.type === 'rehearsal') {
                const rehearsal = {
                    scene_id: req.body.scene_id,
                    production_id: req.params.id,
                    start_time: req.body.date
                }
                knex('rehearsal_dates')
                    .insert(rehearsal)
                    .then((data) => {
                        res.redirect(req.originalUrl.split('?')[0] + '/admin');
                    }).catch((err) => {
                        next(err);
                    });
            }
        });
});

router.get('/:id/cast', (req, res, next) => {
    productionsModel.castList(req.params.id)
        .then((cast) => {
            res.json({ cast })
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id/blackoutdates', (req, res, next) => {
    productionsModel.blackoutDates(req.params.id)
        .then((blackoutDates) => {
            res.json({ blackoutDates })
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id/admin', (req, res, next) => {
    const production = productionsModel.getById(req.params.id);
    const cast = productionsModel.blackoutDates(req.params.id);
    const productions = productionsModel.byUser(req.session.user_id);
    const scenes = scenesModel.scenesByProduction(req.params.id);
    Promise.all([production, cast, productions, scenes])
        .then((data) => {
            charactersModel.byPlayId(data[0].play_id)
                .then((characters) => {
                    res.render('admin-console', { user: req.session.user_id, the_production: data[0], actors: data[1], productions: data[2], characters, scenes: data[3] });
                })
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id/admin/fullcalendar', (req, res, next) => {
    const production = productionsModel.getById(req.params.id);
    const cast = productionsModel.blackoutDates(req.params.id);
    const scenes = scenesModel.rehearsalDatesByProduction(req.params.id); ``
    Promise.all([production, cast, scenes])
        .then((data) => {
            const calendarEvents = [];
            if (data[0].performance_dates) {
                data[0].performance_dates.forEach((performance) => {
                    const event = { title: data[0].name, start: performance, className: 'performance' };
                    calendarEvents.push(event);
                });
            }

            for (const actor of data[1]) {
                if (actor.blackout_dates) {
                    for (const blackout_date of actor.blackout_dates) {
                        const event = { title: `${actor.character}`, start: blackout_date, className: 'blackout' };
                        calendarEvents.push(event);
                    }
                }
            }

            // consolidate reharsal info so rehearsals aren't listed as a separate events for each character
            let sceneObjs = {};
            for (const sceneRearsal of data[2]) {
                if (!sceneObjs[sceneRearsal.id]) { sceneObjs[sceneRearsal.id] = {}; }
                sceneObjs[sceneRearsal.id].name = sceneRearsal.name;
                sceneObjs[sceneRearsal.id].characters = sceneObjs[sceneRearsal.id].characters ? sceneObjs[sceneRearsal.id].characters + ', ' + sceneRearsal.character : sceneRearsal.character;
                sceneObjs[sceneRearsal.id].start = sceneRearsal.start_time;
                sceneObjs[sceneRearsal.id].end = sceneRearsal.end_time;
            }

            for (const key in sceneObjs) {
                if (sceneObjs.hasOwnProperty(key)) {
                    const element = sceneObjs[key];
                    const rehearsalEvent = { id: key, title: `${element.name} ${element.characters}`, start: element.start, end: element.end, className: 'rehearsal' };
                    console.log(rehearsalEvent);
                    calendarEvents.push(rehearsalEvent);
                }
            }

            res.json(calendarEvents);

        })
        .catch((err) => {
            next(err);
        });
});

router.post('/', (req, res, next) => {
    const performanceDates = req.body.performance_dates.split(',');
    let production = {
        name: req.body.name,
        play_id: req.body.play_id,
        performance_dates: JSON.stringify(performanceDates)
    }
    productionsModel.create(production)
        .then((production) => {
            let myProduction = {
                user_id: req.params.user_id,
                production_id: production[0].id,
                production_role_id: 1
            }
            knex('users_productions')
                .insert(myProduction)
                .then(() => {
                    res.redirect(`/users/${req.params.user_id}/profile`)
                })
        })
        .catch((err) => {
            next(err)
        });
});

router.post('/:id/add_cast', (req, res, next) => {
    const actorUserData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        role_id: 2
    }

    let newUserPromise;
    userModel.getByEmail(req.body.email)
        .then((user) => {
            newUserPromise = user ? false : userModel.create(actorUserData);
            if (newUserPromise) {
                newUserPromise
                    .then((user) => {
                        processActorData(user[0], req.body, req.params.id)
                            .then((data) => {
                                res.redirect(req.originalUrl.replace('add_cast', 'admin'));
                            })
                            .catch((err) => {
                                next(err)
                            });
                    })
                    .catch((err) => {
                        next(err)
                    });
            } else {
                processActorData(user, req.body, req.params.id)
                    .then((data) => {
                        res.redirect(req.originalUrl.replace('add_cast', 'admin'));
                    })
                    .catch((err) => {
                        next(err)
                    });
            }
        })
        .catch((err) => {
            next(err)
        });
});

function processActorData(actor, actorInfo, production_id) {
    const blackoutDates = JSON.stringify(actorInfo.blackout_dates.replace(' ', '').split(','));
    console.log(blackoutDates);

    const userProduction = {
        user_id: actor.id,
        production_id: production_id,
        blackout_dates: blackoutDates,
        production_role_id: 2
    }
    const userCharacter = {
        user_id: actor.id,
        character_id: actorInfo.character_id
    }
    // TODO: IN THE EVENT OF AN EXISTING USER, A RECORD IN users_productions
    // SHOULD BE UPDATED INSTEAD OF INSERTED
    return Promise.all([knex('users_productions').insert(userProduction), knex('users_characters').insert(userCharacter)])
}

router.delete('/:id', (req, res) => {
    knex('productions')
        .where('id', req.params.id)
        .del()
        .then(function (data) {
            res.redirect(`/users/${req.params.user_id}/profile`)
        })
});

module.exports = router;
