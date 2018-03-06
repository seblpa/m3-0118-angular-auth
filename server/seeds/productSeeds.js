const mongoose = require('mongoose');
const Product = require('../models/Product');


mongoose.connect("mongodb://localhost/proyecto-final");

const products = [
  {
    name: "Seguro de Auto",
    description: "Seguro cobertura completa para automóbil",
    _user: "5a9686871f4bffafad7556dd"
  },
  {
    name: "Seguro de Casa",
    description: "Seguro completo para Hogar",
    _user: "5a9686f3fade98b0a9ce0812"
  },
  {
    name: "Seguro de Salud Básico",
    description: "Seguro cobertura básica salud",
    _user: "5a9686871f4bffafad7556dd"
  },
  {
    name: "Seguro de Salud Completo",
    description: "Seguro cobertura completa salud",
    _user: "5a9686871f4bffafad7556dd"
  },
  {
    name: "Seguro de Salud Reembolso",
    description: "Seguro cobertura salud con reembolso de gastos médicos",
    _user: "5a9686871f4bffafad7556dd"
  },
  {
    name: "Seguro de Vida",
    description: "Seguro de vida",
    _user: "5a9686871f4bffafad7556dd"
  },
  {
    name: "Seguro de Comercios",
    description: "Seguro cobertura completa comercios",
    _user: "5a9686871f4bffafad7556dd"
  },
  {
    name: "Seguro de Empresas",
    description: "Seguro cobertura completa empresas",
    _user: "5a9686871f4bffafad7556dd"
  },
  {
    name: "Seguro de Responsabilidad Civil",
    description: "Seguro cobertura completa RC",
    _user: "5a9686871f4bffafad7556dd"
  },
  {
    name: "Seguro de Moto",
    description: "Seguro cobertura todo riesgo moto",
    _user: "5a9686871f4bffafad7556dd"
  },
];

  Product.create(products, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${products.length} products`)
  });