(function () {
  'use strict';

  var $app = angular.module('store');
  $app.config(function($stateProvider) {
    $stateProvider
      .state('store.category', {
        url: '/c/:category',
        templateUrl: 'store/store-category/store-category.html',
        controller: 'StoreCategoryCtrl'
      });
  });

}());
