'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('AboutCtrl', function ($scope, $http) {

    $scope.stile={"background-color":"white"};

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('/data/competences.json').
      success(function(data, status, headers, config) {
        $scope.competences = data.data;
        $scope.formations = data.formation;
        $scope.experiences = data.experience;
        $scope.sports = data.sport;
        $scope.movies = data.movie;
        $scope.games= data.game;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  });
