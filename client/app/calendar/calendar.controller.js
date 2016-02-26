'use strict';

angular.module('calendarConceptApp')
  .controller('CalendarCtrl', function ($scope, events, DateManager, EventData) {

    EventData.parseEvents(events);

    $scope.currentMonth = DateManager.getMonth();
    $scope.currentYear = DateManager.getYear();
    $scope.daysInView = DateManager.daysInView();
    $scope.currentEvents = EventData.getParsedEvents();

    $scope.setDate = function(){
      DateManager.setDate($scope.currentYear, $scope.currentMonth);
      $scope.daysInView = DateManager.daysInView();
      $scope.currentEvents = EventData.getParsedEvents();
    };

  });
