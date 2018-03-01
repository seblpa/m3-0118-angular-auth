const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const bcrypt   = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    require: [true, "Username is required"]
  },
  email: {
    type: String,
    require: [true, "Username is required"]
  },
  password: {
    type: String,
    require: [true, "Username is required"]
  },
  _customer: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Customer'
    }
  ]
},
  {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;