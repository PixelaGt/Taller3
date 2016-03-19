(function() {
  'use strict';
  var app = angular.module('yagApp');

  //Factory para servicio http get
  app.factory('connection', ['$http','API_HOST','API_KEY', function($http, API_HOST, API_KEY) {
    return {
      getData: function(link) {
        return $http.get(API_HOST+link+API_KEY);
      }
    };
  }]);
})();
