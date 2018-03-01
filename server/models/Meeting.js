const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const meetingSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    require: true
  },
  _customer: 
    {
      type: Schema.Types.ObjectId,
      ref: 'Customer'
  },
  _user: 
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Meeting', meetingSchema);