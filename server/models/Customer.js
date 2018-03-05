const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  //closed: boolean,
  email: {
    type: String,
    require: true
  },
  //location: { type: { type: String }, coordinates: [Number] },
  _product: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
      
    
  ]
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  
});

customerSchema.index({ location: '2dsphere' })

module.exports = mongoose.model('Customer', customerSchema);
