// Creating module with name cordovaApp
var app = angular.module('cordovaApp', []);

// creating the controller and inject Angular's $scope
app.controller('mainController', function($scope) {

    // create a message to display in our view
    $scope.message = 'Excited to build hybrid app';
});
