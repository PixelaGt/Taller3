(function() {
  'use strict';
  var app = angular.module('yagApp');

  //Controlador para buscar un gif random
  app.controller('RandomController', ['$scope', 'connection', function($scope, connection) {

    $scope.gif = {};

    $scope.fetch = function(){
      connection.getData('random').success(function(data, status) {
        $scope.gif = data;
      });
    };

    $scope.fetch();
  }]);
})();
