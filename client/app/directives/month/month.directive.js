'use strict';

angular.module('calendarConceptApp')
  .directive('month', function (EventData) {
    return {
      templateUrl: 'app/directives/month/month.html',
      scope: {
        events: "="
      },
      restrict: 'EA',
      link: function (scope, element, attrs) {

        var getDaysInMonth = function(month, year) {
          var date = new Date(year, month, 1);
          var days = [];
          console.log('month', month, 'date.getMonth()', date.getMonth());
          while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);

          }
          return days;
        };

        scope.events = EventData.getParsedEvents(2012, 3);

        scope.month = getDaysInMonth(2012, 3);
      }
    };
  });