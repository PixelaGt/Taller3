(function() {
  var app = angular.module('yagApp');

  //Controlador para buscar un gif random
  app.controller('RandomController', ['connection', function(connection) {
    var random = this;
    random.info = { };

    connection.getData('random').success(function(data, status) {
      random.info = data;
    });
  }]);
})();
