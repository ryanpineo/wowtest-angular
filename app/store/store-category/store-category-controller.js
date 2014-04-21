(function () {
  'use strict';

  var $app = angular.module('store');

  $app.controller('StoreCategoryCtrl', function ($scope, $stateParams, Restangular) {
    $scope.categories = Restangular.all('store/category')
                                   .all($stateParams.category)
                                   .getList().$object;
  });

}());
