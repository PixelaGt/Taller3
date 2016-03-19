(function() {
  'use strict';
  var app = angular.module('yagApp');

  //Controlador para buscar un gif por ID
  app.controller('GifController', ['$scope','connection', function($scope, connection) {

    $scope.gif = { };
    $scope.status = 0;
    
    $scope.fetch = function(){
      connection.getData('feqkVgjJpYtjy').success(function(data, status) {
        $scope.gif = data;
        $scope.status = status;
      });
    };

    $scope.fetch();
  }]);
})();
