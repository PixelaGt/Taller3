(function() {
  'use strict';
  var app = angular.module('yagApp');

  //Controlador para buscar un gif por ID
  app.controller('GifsController', ['$scope','connection', function($scope, connection) {

    $scope.gifs = [];
    $scope.status = 0;

    $scope.fetch = function(){
      connection.getData('trending').success(function(data, status) {
        $scope.gifs = data.data;
        $scope.status = status;
        $scope.page = data.meta;
      });
    };

    $scope.fetch();
  }]);
})();
