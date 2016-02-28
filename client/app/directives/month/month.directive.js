'use strict';

angular.module('calendarConceptApp')
  .directive('month', function () {
    return {
      scope: {
        days: "=",
        evts: "="
      },
      templateUrl: 'app/directives/month/month.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        console.log(scope.days);
        // console.log(scope.evts);
        scope.weeks = [];

        function weekifyDays() {
          var chunkSize = 7;
          scope.weeks = scope.days.map( function(e, i) {
            return i % chunkSize === 0 ?
                scope.days.slice(i, i + chunkSize) : null;
          })
          .filter(function(e){ return e; });
          // console.log(scope.days.length, scope.weeks);
        }

        scope.$watch('days', function() {
          weekifyDays();
        });
      }
    };
  });
