const Product = require('../models/Product.js');
const express = require('express');

const router = express.Router()

router.get('/show', (req, res, next) => {
  Product.find()
    .then((foundProducts) => res.status(200).json(foundProducts))
    .catch((e) => res.status(500).json(e))
});

// preguntar manu por .populate
router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(foundProduct =>  res.status(200).json(foundProduct))
    .catch(e => res.status(500).json({
      message: `Product with id: ${req.params.id} does not exists!`, error,
    }));
});

router.put('/edit/:id', (req, res) => {
  Product.findById(req.params.id)
     //.then((foundUser) => {
      const { name, email, location } = req.body;
      const updates = { name, email, location };
      Product.findByIdAndUpdate(req.params.id, updates, { new: true })
        .then(newProduct => res.status(200).json(newProduct))
        .catch(e => res.status(500).json(e));
    });
//});

router.post('/create', (req, res) => {
  console.log('entro')
  Product.findOne({ name: req.body.name })
    .then((product) => {
      if (product) return res.status(400).json({ message: 'The product already exists!' });
      const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        _user: req.body._user
      });
      newProduct.save(e => ((e) ? res.status(500).json(e) : res.status(200).json(newProduct)));
    });
});

router.delete('/delete/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id)
    .then(product => res.status(200).json(product))
    .catch(e => res.status(500).json(e));
});

module.exports = router