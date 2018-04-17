'use strict';

const express = require('express');
const router = express.Router({ mergeParams: true });
const productionsModel = require('../models/productions');

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

module.exports = router;