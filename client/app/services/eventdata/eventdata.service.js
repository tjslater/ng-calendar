'use strict';

angular.module('calendarConceptApp')
  .service('EventData', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getEvents = function(){
      return $http.get('/api/events')
    };

    this.parseEvents = function(events) {
      events.forEach(this.parseEvent)
    };

    this.parseEvent = function(event){
      console.log(event);
    }


  });
