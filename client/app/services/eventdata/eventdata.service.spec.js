'use strict';

describe('Service: eventdata', function () {

  // load the service's module
  beforeEach(module('calendarConceptApp'));

  // instantiate service
  var eventdata;
  beforeEach(inject(function (_eventdata_) {
    eventdata = _eventdata_;
  }));

  it('should do something', function () {
    expect(!!eventdata).toBe(true);
  });

});
