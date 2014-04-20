(function () {
  'use strict';

  describe('home state', function() {
    beforeEach(module('home'));

    var $state, state = 'home';
    beforeEach(inject(function($injector) {
      $state = $injector.get('$state');
    }));

    it('should respond to URL', function() {
      expect($state.href(state)).toBe('#/');
    });
  });
}());
