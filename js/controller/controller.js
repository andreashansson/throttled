var app = angular.module('app', []);

app.controller('mainController', function($scope) {

  $scope.test = function(val) {

    $scope.speed = val;

  }

});
