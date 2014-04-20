(function () {
  'use strict';

  describe('store category controller', function() {
    var $scope, $rootScope, createController;

    beforeEach(module('store'));

    beforeEach(inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('StoreCategoryCtrl', {'$scope': $scope});
      };
    }));

    it('exists', function() {
      var ctrl = createController();
      expect(ctrl).toBeDefined();
    });
  });

}());
