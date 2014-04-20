(function () {
  'use strict';

  var $app = angular.module('store');

  $app.controller('StoreCategoryCtrl', function ($scope) {
    $scope.categories = [
      {name: 'Two Handed Swords', slug: 'two-handed-swords'}
    ];
  });

}());
