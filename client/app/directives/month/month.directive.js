'use strict';

angular.module('calendarConceptApp')
  .directive('month', function (EventData, DateManager) {
    return {
      templateUrl: 'app/directives/month/month.html',
      scope: {},
      restrict: 'EA',
      link: function (scope, element, attrs) {



        scope.events = EventData.getParsedEvents(2012, 3);

        scope.month = DateManager.getDaysInMonth(2012, 3);
      }
    };
  });