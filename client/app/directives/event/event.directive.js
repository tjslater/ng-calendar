'use strict';

angular.module('calendarConceptApp')
  .directive('event', function () {
    return {
      templateUrl: 'app/directives/event/event.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });