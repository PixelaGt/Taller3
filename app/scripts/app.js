'use strict';

/**
 * @ngdoc overview
 * @name yagApp
 * @description
 * # yagApp
 *
 * Main module of the application.
 */
angular
  .module('yagApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'GifsController'
      })
      .when('/:id', {
        templateUrl: 'views/gif.html',
        controller: 'GifController'
      })
      .when('/random', {
        templateUrl: 'views/gif.html',
        controller: 'RandomController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('API_HOST','http://api.giphy.com/v1/gifs/')
  .constant('API_KEY','?api_key=dc6zaTOxFJmzC');
