const mongoose = require('mongoose');
const Customer = require('../models/Customer');


mongoose.connect("mongodb://localhost/proyecto-final");

const customers = [
  {
    name: "Carlos Sánchez",
    email: "carlossan@gmail.com",
    phone: 666666666,
    address: "Paseo de la Chopera, 19",
    zipCode: 28002,
    city: "Madrid",
    location: { 
      // type: 'Point', coordinates: [-3.698476, 40.392370] lng lat
    lat: 40.392370,
    lng: -3.698476
    },  
    _product: "5a9e364a14e5255bb0c0753c"
  },
  {
    name: "Pablo Gómez",
    email: "pablogom@gmail.com",
    phone: 666666666,
    address: "Calle de la Arquitectura, 30",
    zipCode: 28003,
    city: "Madrid",
    location: { 
      lat: 40.399047,  
      lng: -3.702015
    },
    _product: "5a9e364a14e5255bb0c0753d"
  },
  {
    name: "María López",
    email: "marialo@gmail.com",
    phone: 666666666,
    address: "Calle del pintor, 20",
    zipCode: 28004,
    city: "Madrid",
    location: { 
      lat: 40.419127,  
      lng: -3.709858
    },
    _product: "5a9e364a14e5255bb0c0753e"
  },
  {
    name: "Cristina Díaz",
    email: "cristinadiaz@gmail.com",
    phone: 666666666,
    address: "Calle de la Arquitectura, 30",
    zipCode: 28005,
    city: "Madrid",
    location: { 
      lat: 40.454992,  
      lng: -3.700588
    },
    _product: "5a9e364a14e5255bb0c07540"
  },
  {
    name: "Ricardo Súarez",
    email: "ricsuarez@gmail.com",
    phone: 666666666,
    address: "Calle de Bélgica, 10",
    zipCode: 28006,
    city: "Madrid",
    location: { 
      lat: 40.494754,  
      lng: -3.665655  
    },
    _product: "5a9e364a14e5255bb0c0753f"
  },
  {
    name: "Sandra Martín",
    email: "sandramar@gmail.com",
    phone: 666666666,
    address: "Calle de la cúltura, 1",
    zipCode: 28007,
    city: "Madrid",
    location: { 
      lat: 40.472558,  
      lng: -3.775776  
    },
    _product: "5a9e364a14e5255bb0c07541"
  },
  {
    name: "David García",
    email: "davidgarcia@gmail.com",
    phone: 666666666,
    address: "Calle Mediterranea, 4",
    zipCode: 28009,
    city: "Madrid",
    location: { 
      lat: 40.437356,  
      lng: -3.811138
    },
    _product: "5a9e364a14e5255bb0c07543"
  },
  {
    name: "Paola Sánchez",
    email: "paolasan@gmail.com",
    phone: 666666666,
    address: "Calle de España, 7",
    zipCode: 28012,
    city: "Getafe",
    location: { 
      lat: 40.317243,  
      lng: -3.716467 
    },
    _product: "5a9e364a14e5255bb0c07542"
  },
  {
    name: "Mateo González",
    email: "mateogon@gmail.com",
    phone: 666666666,
    address: "Calle de Francia, 17",
    zipCode: 28100,
    city: "Alcalá de Henares",
    location: { 
      lat: 40.497299,  
      lng: -3.376507  
    },
    _product: "5a9e364a14e5255bb0c07544"
  },
  {
    name: "Candelaria Ramos",
    email: "cande@gmail.com",
    phone: 666666666,
    address: "Calle de la Victoria, 47",
    zipCode: 28010,
    city: "Madrid",
    location: { 
      lat: 40.375914,  
      lng: -3.611151  
    },
    _product: "5a9e364a14e5255bb0c07545"
  },
];

  Customer.create(customers, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${customers.length} customers`)
  });