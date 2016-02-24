'use strict';

describe('Service: datemanager', function () {

  // load the service's module
  beforeEach(module('calendarConceptApp'));

  // instantiate service
  var datemanager;
  beforeEach(inject(function (_datemanager_) {
    datemanager = _datemanager_;
  }));

  it('should do something', function () {
    expect(!!datemanager).toBe(true);
  });

});
