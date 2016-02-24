'use strict';

angular.module('calendarConceptApp')
  .directive('day', function () {
    return {
      templateUrl: 'app/directives/day/day.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });