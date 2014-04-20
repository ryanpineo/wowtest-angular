(function () {
  'use strict';

  describe('store state', function() {
    beforeEach(module('store'));

    var $state, state = 'store';
    beforeEach(inject(function($injector) {
      $state = $injector.get('$state');
    }));

    it('should respond to URL', function() {
      expect($state.href(state)).toBe('#/store');
    });
  });
}());
