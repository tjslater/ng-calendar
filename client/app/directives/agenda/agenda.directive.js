'use strict';

angular.module('calendarConceptApp')
  .directive('agenda', function () {
    return {
      scope: {
        days: "=",
        evts: "="
      },
      templateUrl: 'app/directives/agenda/agenda.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });