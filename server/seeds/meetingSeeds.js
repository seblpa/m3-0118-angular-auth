const mongoose = require('mongoose');
const Meeting = require('../models/Meeting');


mongoose.connect("mongodb://localhost/proyecto-final");

const meetings = [
  {
    date: new Date,
    description: "Presentación de producto",
    _customer: "5a959a5125842f952db8546e",
    _user: "5a95802ec2093a8cbd6a7756"
  },
];

  Meeting.create(meetings, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${meetings.length} meetings`)
  });