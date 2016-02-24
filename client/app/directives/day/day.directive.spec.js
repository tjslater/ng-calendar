'use strict';

describe('Directive: day', function () {

  // load the directive's module and view
  beforeEach(module('calendarConceptApp'));
  beforeEach(module('app/directives/day/day.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<day></day>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the day directive');
  }));
});