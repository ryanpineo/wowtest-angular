(function () {
  'use strict';

  var $app = angular.module('main', []);
  $app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.test = 1;
  }]);

}());
