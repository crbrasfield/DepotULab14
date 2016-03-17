var factories = angular.module('myApp.factories', []);
factories.factory('GetFactory', ['$http', function($http) {
    var f = {};
    f.getPost = function() {
        return $http({
            url: `http://localhost:3000/api/posts`,
            method: 'GET'
        });
    }
    
    f.newPost = function (content) {
        $http({
            url: `http://localhost:3000/api/posts`,
            method: 'POST',
            data: content
        }).then(function(success){
            console.log('success')
        }, function(error) {
            console.log('error');
        });
    }
    
    return f;
}]);