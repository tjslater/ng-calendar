'use strict';

angular.module('calendarConceptApp')
  .service('EventData', function ($http, DateManager) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var parsedEvents = {};
    /**
     * to get a length of an event, you turn the start and end days into milliseconds,
     * subtract the startdate from the enddate,
     * then divide by DAY_IN_MILLISECONDS to get the event length
     * @const {number}
     */
    var DAY_IN_MILLISECONDS = 86400000;

    /**
     * Utility function primarily for benchmarking event parser
     * @param name
     * @returns {{stop: EventData.stop}}
     */
    var timer = function (name) {
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
     * Resolves on /calendar route in calendar.js
     * Returns events object to Calendar controller
     * @returns {HttpPromise}
     */
    this.getEvents = function () {
      return $http.get('/api/events')
    };

    /**
     *
     * @param events
     */
    this.parseEvents = function (events) {
      var t = timer('event parser');
      events.forEach(this.addEvent, this);
      t.stop();
    };

    /**
     *
     * @param dates
     * @returns {{}}
     */
    this.getParsedEvents = function () {
      var dates = DateManager.daysInView();
      var monthEvents = {};
      if(!dates) {
        return parsedEvents;
      }
      dates.forEach(function(date) {
        monthEvents[date] = parsedEvents[date]
      });
      // console.log('month events', monthEvents);
      return monthEvents;


    };

    /**
     * Adds an event to the master event object
     * Each key in the object is a key to an array of events for that date.
     * If the startDate is equal to an endDate, add it by key
     * If it's a multiday, iterate from its start date to its end date, adding it to each day in between
     * @param event
     */
    this.addEvent = function (event) {
      if(!event) return;
      var dateArray = event.startDate.split('-');
      var startDate = new Date(dateArray[0], dateArray[1]-1, dateArray[2]);
      if(!parsedEvents[startDate]) {
        parsedEvents[startDate] = [];
      }
      if(event.startDate === event.endDate) {
        parsedEvents[startDate].push(event);
      } else {
        this.parseMultiDayEvent(event, startDate, true);
      }
    };
    /**
     * Multiday parser
     * @param event
     * @param startDate
     * @param isFirstDay
     */
    this.parseMultiDayEvent = function (event, startDate, isFirstDay) {
      var dateArray = event.endDate.split('-');
      /**
       * By splitting the string into an array, avoids locale time issue
       * @type {Date}
       */
      var endDate = new Date(dateArray[0], dateArray[1]-1, dateArray[2]);
      var startIdx = null;
      var eventLength = null;

      while (startDate <= endDate) {
        if(!parsedEvents[startDate]) parsedEvents[startDate] = [];
        if(isFirstDay === false) event.startIdx = startIdx;
        parsedEvents[startDate].push(event);
        if(isFirstDay) {

          //For multiday events, keep track of index value of firstDay
          //May or may not be useful later on
          startIdx = parsedEvents[startDate].indexOf(event);
          /**
           * For creating the multiday element in the view
           * @type {number}
           */
          eventLength = Math.round(((endDate.getTime() - startDate.getTime()) / DAY_IN_MILLISECONDS)) + 1;
          parsedEvents[startDate][startIdx].eventLength = eventLength;
          parsedEvents[startDate][startIdx].startIdx = startIdx;
          isFirstDay = false;
        }
        startDate.setDate(startDate.getDate() + 1)
      }
    }


  });
