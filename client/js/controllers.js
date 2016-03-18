var controllers = angular.module('myApp.controllers', []);
controllers.controller('BlogpostController', ['$scope', '$rootScope', '$http', 'GetFactory', function($scope, $rootScope, $http, GetFactory) {

    $scope.getPost = function() {
        GetFactory.getPost().then(function(data) {
            var blogPosts = data.data;
            $scope.postList = blogPosts;
        })
    };

    $scope.getPost();

    $scope.createNewPost = function() {
        console.log('clicked');
        location.href = "/#/post";
    };

}]);

controllers.controller('NewpostController', ['$scope', '$rootScope', '$http', 'GetFactory', function($scope, $rootScope, $http, GetFactory) {

    $scope.submitPost = function() {
        var newPostData = {
            title: $scope.titleVal,
            author: $scope.authorVal,
            content: $scope.contentVal
        };
        GetFactory.newPost(newPostData);
        alert('Post Sucessfull!');
        setInterval(function() {
            window.location.href = '/';
        }, 500);
    }

}]);

controllers.controller('SinglepostController', ['$scope', '$rootScope', '$routeParams', 'GetFactory', function($scope, $rootScope, $routeParams, GetFactory) {

    var postId = $routeParams.id;

    GetFactory.getSinglePost(postId).then(function(response) {
        $scope.post = response.data;
    });


}]);
