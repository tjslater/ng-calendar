'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RouteSchema = new Schema({
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
  ctaUrl: String,
  location: String,
  isAllDay: Boolean
});

module.exports = mongoose.model('Route', RouteSchema);