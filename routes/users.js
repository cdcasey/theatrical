'use strict';

const express = require('express');
const router = express.Router();
const usersModel = require('../models/users');
const productionsModel = require('../models/productions');

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
    usersModel.create(req.body)
        .then((user) => {
            res.status(201).json(user);
        })
        .catch((err) => {
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
    const productions = productionsModel.byUser(req.params.id);
    usersModel.getById(req.params.id)
        .then((user) => {
            productions.then((productions) => {
                res.render('profile', { user, productions });
            })
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/:id', (req, res, next) => {
    usersModel.update(req.body)
        .then((user) => {
            res.status(201).json(user);
        })
        .catch((err) => {
            next(err);
        })
});

router.delete('/:id', (req, res)=>{
    usersModel.where('id', id)
    .del()
    .then(()=>{
      res.send('Deleted user')
    })
    .catch((err)=>{
      res.send(err)
    })
})

module.exports = router;
