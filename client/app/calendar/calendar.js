'use strict';

angular.module('calendarConceptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'app/calendar/calendar.html',
        controller: 'CalendarCtrl',
        resolve: {
          events: function($http, EventData) {
            return EventData.getEvents().then(function(res){
              return res.data;
            })
          }
        }
      });
  });