(function () {
  'use strict';

  var $app = angular.module('wowtest', ['restangular', 'templates', 'main', 'home', 'store']);

  $app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:8000');
  });

})();
