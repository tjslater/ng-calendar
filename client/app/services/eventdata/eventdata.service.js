'use strict';

angular.module('calendarConceptApp')
  .service('eventdata', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getEvents = function(){
      return $http.get('/api/events')
    }


  });
