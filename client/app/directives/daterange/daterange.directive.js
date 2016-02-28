'use strict';

angular.module('calendarConceptApp')
  .directive('daterange', function () {
    return {
      scope: {
        days: "="
      },
      templateUrl: 'app/directives/daterange/daterange.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {

        // scope.$watch('days', function() {
        //   weekifyDays();
        // });
      }
    };
  });
