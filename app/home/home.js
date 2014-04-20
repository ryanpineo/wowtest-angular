(function () {
  'use strict';

  var $app = angular.module('home', ['ui.router']);
  $app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      });
  });

}());
