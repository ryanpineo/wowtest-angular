(function () {
  'use strict';

  describe('main controller', function() {
    var $scope, $rootScope, createController;

    beforeEach(module('main'));

    beforeEach(inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('MainCtrl', {'$scope': $scope});
      };
    }));

    it('exists', function() {
      var ctrl = createController();
      expect(ctrl).toBeDefined();
    });
  });

}());
