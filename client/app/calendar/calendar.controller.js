'use strict';

angular.module('calendarConceptApp')
  .controller('CalendarCtrl', function ($scope, events, EventData) {
    $scope.events = events;
    EventData.parseEvents(events);



  });
