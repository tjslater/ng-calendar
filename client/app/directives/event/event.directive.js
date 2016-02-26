'use strict';

angular.module('calendarConceptApp')
  .directive('event', function () {
    return {
      scope: {
        evt: "="
      },
      templateUrl: 'app/directives/event/event.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        
      }
    };
  });