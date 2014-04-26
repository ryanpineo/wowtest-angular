(function () {
  'use strict';

  var app = angular.module('users', ['ui.router', 'users-create']);

  app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
    .state('users', {
      url: '/account',
      template: '<section ui-view></section>'
    });
  }]);

}());
