'use strict';

const express = require('express');
const router = express.Router({ mergeParams: true });
const productionsModel = require('../models/productions');
const scenesModel = require('../models/scenes');
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
    Promise.all([production, cast])
        .then((data) => {
            res.render('admin-console', { production: data[0], actors: data[1] });
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id/admin/fullcalendar', (req, res, next) => {
    const production = productionsModel.getById(req.params.id);
    const cast = productionsModel.blackoutDates(req.params.id);
    const scenes = scenesModel.rehearsalDatesByProduction(req.params.id);
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
            // console.log(data[2]);

            // let rehearsalEvent = { id: 0 };
            // for (let i = 0; i < data[2].length; i++) {
            //     const sceneRearsal = data[2][i];
            //     // console.log(sceneRearsal);
            //     if (i > 0 && sceneRearsal.id === sceneRearsal[i - 1].id) {
            //         rehearsalEvent.title += `, ${sceneRearsal.character}`;
            //     } else {
            //         calendarEvents.push(rehearsalEvent);
            //         rehearsalEvent = { id: sceneRearsal.id, title: `${sceneRearsal.name} ${sceneRearsal.character}`, start: sceneRearsal.start_time, end: sceneRearsal.end_time, className: 'rehearsal' };
            //     }
            // }
            // for (const sceneRearsal of data[2]) {
            //     let currentScene = sceneRearsal.id;
            //     if (currentScene = rehearsalEvent.id) {
            //     } else {
            //     }
            // if (currentScene === sceneRearsal.id) {
            //     continue;
            // } else {
            //     currentScene = scene.id;
            // }
            // }
            // res.json({calendarEvents, data: data[1]});
            res.json(calendarEvents);
            // res.json({ production: data[0], actors: data[1] });
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/', (req, res, next) => {
  // console.log("BODY", Object.keys(req.body));
  let production = {
    name: req.body.name,
    performance_dates: JSON.stringify(req.body.performance_dates)
  }
   productionsModel.create(production)
       .then((production) => {
         let myProduction = {
           user_id: req.params.user_id,
           production_id: production[0].id,
           production_role_id: 1
         }
         console.log(req.body)
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
//
// router.post('/', (req, res, next) => {
//     productionsModel.create(req.body)
//         .then((production) => {
//             res.status(201).json(production)
//         })
//         .catch((err) => {
//             res.send(err)
//         });
// });

module.exports = router;
