'use strict';

var newsApp = angular.module('newsApp', ['angularMoment']);

//Main controller
newsApp.controller("appController", function ($scope, $http) {
	$scope.formData = {};
    $scope.feeds = {};
    $scope.count = 0;

//retrieve news feeds 
    $http.get('/api/feed')
    .then(
        function (response) {
          $scope.feeds = response.data.results;
          $scope.count = $scope.feeds.length;
          console.log($scope.feeds);
         },
function(errResponse){
    console.error('Error while fetching feeds');
}
);

});


