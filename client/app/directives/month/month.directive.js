'use strict';

angular.module('calendarConceptApp')
  .directive('month', function () {
    return {
      templateUrl: 'app/directives/month/month.html',
      scope: {
        currentMonth: "="
      },
      restrict: 'EA',
      link: function (scope, element, attrs) {


        console.log(scope.currentMonth)
      }
    };
  });