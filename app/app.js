(function () {
  'use strict';

  var app = angular.module('wowtest', [
    'restangular',
    'templates',
    'main',
    'home',
    'store',
    'users'
  ]);

  app.config(['RestangularProvider', function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:8000');
  }]);

})();
