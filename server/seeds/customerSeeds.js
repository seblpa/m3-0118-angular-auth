const mongoose = require('mongoose');
const Customer = require('../models/Customer');


mongoose.connect("mongodb://localhost/proyecto-final");

const customers = [
  {
    name: "Carlos Sánchez",
    email: "carlossan@gmail.com",
    location: { type: 'Point', coordinates: [-3.698476, 40.392370] },  //lng, lat
    _product: "5a958965875cec91903d050a"
  },
  {
    name: "Pablo Gómez",
    email: "pablogom@gmail.com",
    location: { type: 'Point', coordinates: [-3.697092, 40.392770] },  //lng, lat 
    _product: "5a9695760d1594b88324f3d5"
  },
];

  Customer.create(customers, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${customers.length} customers`)
  });