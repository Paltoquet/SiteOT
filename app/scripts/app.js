'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
angular
  .module('showcaseApp', [
    'ngAnimate',
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
        controller: 'MainCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/loisirs',{
        templateUrl: 'views/acceuil.html',
        controller: 'AcceuilCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

