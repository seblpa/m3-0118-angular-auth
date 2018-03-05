const User = require('../models/User.js');
const express = require('express');

const router = express.Router()

router.get('/show', (req, res, next) => {
  User.find()

    .then((foundUsers) => res.status(200).json(foundUsers))
    .catch((e) => res.status(500).json(e))
});

// preguntar manu por .populate
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(foundUser =>  res.status(200).json(foundUser))
    .catch(e => res.status(500).json({
      message: `User with id: ${req.params.id} does not exists!`, error,
    }));
});

router.put('/edit/:id', (req, res) => {
  User.findById(req.params.id)
     //.then((foundUser) => {
      const { username, email, password } = req.body;
      const updates = { username, email, password };
      User.findByIdAndUpdate(req.params.id, updates, { new: true })
        .then(newUser => res.status(200).json(newUser))
        .catch(e => res.status(500).json(e));
    });
//});

router.delete('/delete/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(e => res.status(500).json(e));
});

module.exports = router