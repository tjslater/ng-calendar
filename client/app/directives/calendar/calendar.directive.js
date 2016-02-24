'use strict';

angular.module('calendarConceptApp')
  .directive('calendar', function () {
    return {
      templateUrl: 'app/directives/calendar/calendar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });