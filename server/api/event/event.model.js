'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  description: String,
  title: String,
  tags: [
    {tagCss: String, tagName: String}
  ],
  type: String,
  endDate: String,
  startDate: String,
  endTime: String,
  startTime: String,
  ID: String,
  cta: {
    url: String,
    text: String
  },
  timeZone: String,
  location: String,
  isAllDay: String
});

module.exports = mongoose.model('Event', EventSchema);