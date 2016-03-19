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
        controller: 'GifController',
        controllerAs: 'gif'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'RandomController',
        controllerAs: 'gif'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('API_HOST','http://api.giphy.com/v1/gifs/')
  .constant('API_KEY','?api_key=dc6zaTOxFJmzC');
