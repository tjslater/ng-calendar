'use strict';

angular.module('calendarConceptApp')
  .directive('month', function () {
    return {
      scope: {
        days: "=",
        evts: "=",
        week: "="
      },
      templateUrl: 'app/directives/month/month.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        // console.log(scope.days);
        // console.log(scope.evts);

      }
    };
  });
