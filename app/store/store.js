(function () {
  'use strict';

  var app = angular.module('store', ['ui.router', 'restangular']);

  app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
    .state('store', {
      url: '/store',
      templateUrl: 'store/store.html'
    });
  }]);

}());
