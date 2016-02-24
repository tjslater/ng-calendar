'use strict';

angular.module('calendarConceptApp')
  .controller('CalendarCtrl', function ($scope, eventdata) {
    $scope.message = eventdata.test;
  });
