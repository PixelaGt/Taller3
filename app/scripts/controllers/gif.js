(function() {
  var app = angular.module('yagApp');

  //Controlador para buscar un gif por ID
  app.controller('GifController', ['connection', function(connection) {
    var search = this;
    search.info = { };

    connection.getData('feqkVgjJpYtjy').success(function(data, status) {
      search.info = data;
    });
  }]);
})();
