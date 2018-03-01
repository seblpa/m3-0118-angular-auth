const mongoose = require('mongoose');
const Product = require('../models/Product');


mongoose.connect("mongodb://localhost/proyecto-final");

const products = [
  {
    name: "Seguro Auto",
    description: "Seguro cobertura completa para automóbil",
    _user: "5a95802ec2093a8cbd6a7756"
  },
  {
    name: "Seguro Casa",
    description: "Seguro completo Hogar",
    _user: "5a9686f3fade98b0a9ce0812"
  },
];

  Product.create(products, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${products.length} products`)
  });