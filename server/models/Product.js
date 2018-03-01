const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  _user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Product', productSchema);