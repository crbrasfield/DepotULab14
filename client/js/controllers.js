var controllers = angular.module('myApp.controllers', []);
controllers.controller('BlogpostController', ['$scope', '$rootScope', '$http', 'GetFactory', function($scope,$rootScope,$http,GetFactory) {

 
    
    $scope.getPost = function() {
        GetFactory.getPost().then(function(data){
          var blogPosts = data.data;
          $scope.postList = blogPosts;
          console.log(blogPosts);
          console.log('com');
        })
        
        
    };
    
    $scope.getPost();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //create new post button
    $scope.createNewPost = function() {
        console.log('clicked');
        location.href = "/#/post";
    }
    




}]);

controllers.controller('NewpostController', ['$scope', '$rootScope', '$http', 'GetFactory', function($scope,$rootScope,$http,GetFactory) {


    


    $scope.submitPost = function () {
       var newPostData = {
           title: $scope.titleVal ,
           author: $scope.authorVal ,
           content: $scope.contentVal
       };
       GetFactory.newPost(newPostData);
       alert('Post Sucessfull!');
       setInterval(function(){
           window.location.href = '/';
        }, 500);
    }
    
    
    



}]);