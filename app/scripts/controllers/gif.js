(function() {
  'use strict';
  var app = angular.module('yagApp');

  //Controlador para buscar un gif por ID
  app.controller('GifController', ['$scope','$routeParams','connection', function($scope, $routeparams, connection) {

    $scope.gif = { };
    $scope.status = 0;

    $scope.fetch = function(){
      connection.getData($routeparams.id).success(function(data, status) {
        $scope.gif = data;
        $scope.status = status;
      });
    };

    $scope.fetch();
  }]);
})();
