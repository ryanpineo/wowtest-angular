(function () {
  'use strict';

  describe('home state', function() {
    beforeEach(module('home'));

    var $location, $state, state = 'home';
    beforeEach(inject(function($injector) {
      $location = $injector.get('$location');
      $state = $injector.get('$state');
    }));

    it('should respond to URL', function() {
      expect($state.href(state)).toBe('#/');
    });
  });
}());
