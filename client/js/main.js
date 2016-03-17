var app = angular.module('myApp', ['myApp.controllers', 'myApp.factories', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/blogposts.html',
            controller: 'BlogpostController'
        })
        .when('/post', {
            templateUrl: 'views/newpost.html',
            controller: 'NewpostController'
        });
}]);