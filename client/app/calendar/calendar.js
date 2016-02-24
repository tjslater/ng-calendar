'use strict';

angular.module('calendarConceptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'app/calendar/calendar.html',
        controller: 'CalendarCtrl'
      });
  });