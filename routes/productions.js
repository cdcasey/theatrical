'use strict';

const express = require('express');
const router = express.Router({ mergeParams: true });
const productionsModel = require('../models/productions');

router.get('/', (req, res, next) => {
    console.log("USER_ID", req.params.user_id);

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

module.exports = router;