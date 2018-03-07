const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const leadSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  gender: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phone: {
    type: Number
  },
  address: {
    type: String
  },
  zipCode: {
    type: Number
  },
  city: {
    type: String
  },
  location: {
    lat:Number,
    lng: Number
  },
  //location: { type: { type: String }, coordinates: [Number] },
  
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  
});

// customerSchema.index({ location: '2dsphere' })

module.exports = mongoose.model('Lead', leadSchema);
