'use strict';

describe('Directive: daterange', function () {

  // load the directive's module and view
  beforeEach(module('calendarConceptApp'));
  beforeEach(module('app/directives/daterange/daterange.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<daterange></daterange>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the daterange directive');
  }));
});
