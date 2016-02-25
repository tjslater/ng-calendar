'use strict';

angular.module('calendarConceptApp')
  .service('DateManager', function () {
    this.getDaysInMonth = function(year, month) {
      var date = new Date(year, month, 1);
      var days = [];
      console.log('month', month, 'date.getMonth()', date.getMonth());
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);

      }
      return days;
    };
  });
