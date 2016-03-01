goog.provide('glue.ng.calendar.eventService');



/** @const {string} */
glue.ng.calendar.eventService.SERVICE_NAME = 'glueCalendarEventService';

/**
 * to get a length of an event, you turn the start and end days into milliseconds,
 * subtract the startdate from the enddate,
 * then divide by DAY_IN_MILLISECONDS to get the event length
 * @const {number}
 */
glue.ng.calendar.eventService.DAY_IN_MILLISECONDS = 86400000;

/** @type {!angular.Module} */
glue.ng.calendar.eventService.module = angular.module(
  glue.ng.calendar.eventService.SERVICE_NAME, []);

/**
 * @param {!angular.$http} $http
 * @struct @final @ngInject @constructor
 */
glue.ng.calendar.eventService = function ($http) {
  console.log('event service is here');
  /**
   *
   * @type {!angular.$http}
   * @private
   */
  this.ngHttp_ = $http;
  /**
   *
   * @type {{}}
   */
  this.parsedEvents = {};
};

glue.ng.calendar.eventService.timer = function (name) {
  var start = new Date();
  return {
    stop: function () {
      var end = new Date();
      var time = end.getTime() - start.getTime();
      console.log('Timer:', name, 'finished in', time, 'ms');
    }
  }
};


/**
 *
 * @param events
 */
glue.ng.calendar.eventService.prototype.parseEvents = function (events) {
  var t = timer('event parser');
  events.forEach(this.addEvent, this);
  t.stop();
};

/**
 *
 * @returns {!angular.$http.HttpPromise}
 */
glue.ng.calendar.eventService.prototype.getEvents = function () {
  return this.ngHttp_.get('events.json');
};


/**
 *
 * @param {object} event
 * @param {Date} startDate
 * @param {boolean} isFirstDay
 */
glue.ng.calendar.eventService.prototype.parseMultiDayEvent = function (event, startDate, isFirstDay) {
  /** @type {Array} */
  var dateArray = event.endDate.split('-');
  /** @type {Date} */
  var endDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
  /** @type {null|number} */
  var startIdx = null;
  /** @type {null|number} */
  var eventLength = null;

  while (startDate <= endDate) {
    if(!this.parsedEvents[startDate]) {
      this.parsedEvents[startDate] = []
    }
    if(isFirstDay === false) {
      event.startIdx = startIdx
    }

    this.parsedEvents[startDate].push(event);

    if(isFirstDay) {
      /**
       * Gets the event length for visualization purposes
       * @type {number}
       */
      eventLength = Math.round(((endDate.getTime() - startDate.getTime()) / glue.ng.calendar.eventService.DAY_IN_MILLISECONDS)) + 1;
      this.parsedEvents[startDate][startIdx].eventLength = eventLength;
      this.parsedEvents[startDate][startIdx].startIdx = startIdx;
      isFirstDay = false;
    }
    startDate.setDate(startDate.getDate() + 1)
  }
};

/**
 *
 * @param {{startDate: string, endDate: string}} event
 */
glue.ng.calendar.eventService.prototype.addEvent = function (event) {
  if(!event) return;
  /** @type {Array} */
  var dateArray = event.startDate.split('-');
  /** @type {Date} */
  var startDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
  if(!this.parsedEvents[startDate]) {
    this.parsedEvents[startDate] = [];
  }
  if(event.startDate === event.endDate) {
    this.parsedEvents[startDate].push(event);
  } else {
    this.parseMultiDayEvent(event, startDate, true);
  }
};



glue.ng.calendar.eventService.module.service(
  glue.ng.calendar.eventService.SERVICE_NAME,
  glue.ng.calendar.eventService);
