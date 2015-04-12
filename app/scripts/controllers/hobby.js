'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AcceuilCtrl
 * @description
 * # HobbyCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('AcceuilCtrl', function ($scope, $http) {
    $scope.stile={"background":"url(images/etoile.png)",
    "color":"white",
      "font-size": "16px"};
    $scope.stile2={"background":"url(images/nature.jpg)",
      "margin-top":"20px",
      "color":"white",
      "padding-left": "15px",
      "padding-right": "15px",
      "border": "groove 2px black",
      "border-radius": "10px",
      "font-size": "16px"
  }
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('data/competences.json').
      success(function(data, status, headers, config) {
        $scope.sports = data.sport;
        $scope.movies = data.movie;
        $scope.games= data.game;
        $scope.sportd=data.sportdescription;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  });

