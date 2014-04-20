(function () {
  'use strict';

  describe('store category state', function() {
    beforeEach(module('store'));

    var $state, state = 'store.category';
    beforeEach(inject(function($injector) {
      $state = $injector.get('$state');
    }));

    it('should respond to URL', function() {
      expect($state.href(state, {category: 'test'})).toBe('#/store/c/test');
    });
  });

}());
