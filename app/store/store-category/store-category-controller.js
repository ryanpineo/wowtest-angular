(function () {
  'use strict';

  var app = angular.module('store');

  app.controller('StoreCategoryCtrl', ['$scope', '$stateParams', 'Restangular',
                  function ($scope, $stateParams, Restangular) {
    $scope.categories = Restangular.all('store/categories')
    .all($stateParams.category).getList().$object;

    $scope.breadcrumbs = Restangular.all('store/breadcrumbs')
    .all($stateParams.category).getList().$object;
  }]);

}());
