'use strict';

angular.module('calendarConceptApp')
  .controller('CalendarCtrl', function ($scope, events, EventData) {

    EventData.parseEvents(events);

  });
