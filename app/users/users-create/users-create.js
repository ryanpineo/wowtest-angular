(function () {
  'use strict';

  var app = angular.module('users-create', ['ui.router']);

  app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
    .state('users.create', {
      url: '^/signup',
      templateUrl: 'users/users-create/users-create.html'
    });
  }]);

}());
