'use strict';

angular.module('calendarConceptApp')
  .controller('CalendarCtrl', function ($scope, events, DateManager, EventData) {

    EventData.parseEvents(events);
    $scope.currentWeek = DateManager.getWeek();
    $scope.currentMonth = DateManager.getMonth();
    $scope.currentYear = DateManager.getYear();
    $scope.weeksInMonth = DateManager.weeksInMonth();
    $scope.daysInMonthView = DateManager.daysInMonthView();
    $scope.daysInView = DateManager.daysInView();
    $scope.currentEvents = EventData.getParsedEvents();
    $scope.displayType = DateManager.getDisplayType();


    $scope.setDate = function(){
      DateManager.setDate($scope.currentYear, $scope.currentMonth, $scope.currentWeek);
      $scope.daysInMonthView = DateManager.daysInMonthView();
      $scope.daysInView = DateManager.daysInView();
      $scope.currentEvents = EventData.getParsedEvents();
      $scope.weeksInMonth = DateManager.weeksInMonth();
    };

    $scope.setDisplayType = function(){
      DateManager.setDisplayType($scope.displayType);
    };

  });
