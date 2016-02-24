'use strict';

angular.module('calendarConceptApp')
  .directive('month', function () {
    return {
      templateUrl: 'app/directives/month/month.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });