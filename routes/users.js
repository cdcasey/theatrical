'use strict';

const express = require('express');
const router = express.Router();
const usersModel = require('../models/users');
const productionsModel = require('../models/productions');
const playsModel = require('../models/plays');

router.get('/', (req, res, next) => {
    usersModel.all()
        .then((users) => {
            res.json({ users })
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/', (req, res, next) => {
    req.body.role_id = 2;
    usersModel.create(req.body)
        .then((user) => {
            req.session.user_id = user[0].id;
            setTimeout(() => { res.status(201).redirect(`/users/${req.session.user_id}/profile`) }, 4000);
        })
        .catch((err) => {
            res.status(400).send('A user with that email already exists');
            next(err);
        })
});

router.get('/:id', (req, res, next) => {
    usersModel.getById(req.params.id)
        .then((user) => {
            res.json({ user })
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id/profile', (req, res, next) => {
    const user = usersModel.getById(req.session.user_id);
    const productions = productionsModel.byUser(req.params.id);
    const plays = playsModel.all();
    console.log(req.session);
    Promise.all([user, productions, plays])
        .then((data) => {
            res.render('profile', { user: data[0], productions: data[1], plays: data[2] });
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/:id', (req, res, next) => {
    usersModel.update(req.params.id, req.body)
        .then((user) => {
            res.redirect(`/users/${req.params.id}/profile`);
        })
        .catch((err) => {
            next(err);
        })
});

router.delete('/:id', (req, res) => {
    usersModel.where('id', id)
        .del()
        .then(() => {
            res.send('Deleted user')
        })
        .catch((err) => {
            res.send(err)
        })
})

module.exports = router;
