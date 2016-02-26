'use strict';

angular.module('calendarConceptApp')
  .directive('day', function () {
    return {
      scope: {
        evts: "=",
        date: "="
      },
      templateUrl: 'app/directives/day/day.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {

      }
    };
  });