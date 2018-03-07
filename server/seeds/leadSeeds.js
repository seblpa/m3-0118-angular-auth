const mongoose = require('mongoose');
const Lead = require('../models/Lead');


mongoose.connect("mongodb://localhost/proyecto-final");

const leads = [
  {
    name: "Lucas Suárez",
    gender: "Male",
    description: "Presentación de Seguro de vida - llamar dentro de 1 semana",
    email: "Lucas@gmail.com",
    phone: 600001002,
    address: "Paseo Madrid, 19",
    zipCode: 28002,
    city: "Madrid",
    location: { 
    lat: 40.392370,
    lng: -3.698476
    }
  },
  {
    name: "David Martin",
    gender: "Male",
    description: "Presentación de Seguro de vida - llamar dentro de 2 días",
    email: "david@gmail.com",
    phone: 600001002,
    address: "Calle de la pintura, 29",
    zipCode: 28003,
    city: "Madrid",
    location: { 
      lat: 40.399047,  
      lng: -3.702015
    }
  },
  {
    name: "Linda López",
    gender: "Female",
    description: "Presentación de Seguro de Salud básico",
    email: "lindalopez@gmail.com",
    phone: 600001002,
    address: "Calle del escritor, 10",
    zipCode: 28004,
    city: "Madrid",
    location: { 
      lat: 40.419127,  
      lng: -3.709858
    }
  },
  {
    name: "María Carmen Díaz",
    gender: "Female",
    description: "Presentación de Seguro de moto - llamar mañana para hablar con marido",
    email: "maricarmen@gmail.com",
    phone: 600001002,
    address: "Plaza de la Victoria, 40",
    zipCode: 28005,
    city: "Madrid",
    location: { 
      lat: 40.454992,  
      lng: -3.700588
    }
  },
  {
    name: "Manuel Súarez",
    gender: "Male",
    description: "Presentación de Seguro de vida - llamar dentro de 1 semana",
    email: "manusuarez@gmail.com",
    phone: 600001002,
    address: "Calle de Barcelona, 1",
    zipCode: 28006,
    city: "Madrid",
    location: { 
      lat: 40.494754,  
      lng: -3.665655  
    }
  },
  {
    name: "Juan Carlos Perdomo",
    gender: "Male",
    description: "Presentación de Seguro de auto",
    email: "juancarlos@gmail.com",
    phone: 600001002,
    address: "Calle de España, 10",
    zipCode: 28012,
    city: "Getafe",
    location: { 
      lat: 40.317243,  
      lng: -3.716467 
    }
  },
  {
    name: "Lucía Díaz",
    gender: "Female",
    description: "Presentación de Seguro de Salud completo para la familia",
    email: "mateogon@gmail.com",
    phone: 600001002,
    address: "Calle de Francia, 17",
    zipCode: 28100,
    city: "Alcalá de Henares",
    location: { 
      lat: 40.497299,  
      lng: -3.376507  
    }
  },
  {
    name: "Sandro Ramos",
    gender: "Male",
    description: "Presentación de Seguro de Hogar",
    email: "sandroramos@gmail.com",
    phone: 600001002,
    address: "Calle Colombia, 47",
    zipCode: 28010,
    city: "Madrid",
    location: { 
      lat: 40.375914,  
      lng: -3.611151  
    }
  },
];

  Lead.create(leads, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${leads.length} leads`)
  });