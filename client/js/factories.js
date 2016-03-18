var factories = angular.module('myApp.factories', []);
factories.factory('GetFactory', ['$http', function($http) {
    var f = {};
    f.getPost = function() {
        return $http({
            url: `http://localhost:3000/api/posts`,
            method: 'GET'
        });
    }

    f.newPost = function(content) {
        $http({
            url: `http://localhost:3000/api/posts`,
            method: 'POST',
            data: content
        }).then(function(success) {
            console.log('success')
        }, function(error) {
            console.log('error');
        });
    }

    f.getSinglePost = function(postId) {
        return $http({
            url: "http://localhost:3000/api/posts/" + postId,
            method: 'GET'
        });
    }

    return f;
    
    
}]);

// trying to make the resource thing work.... 
// factories.factory('ResourceFactory', ['$resource', function($resource) {
//     return $resource('http://localhost:3000/api/posts/:id');
// }]);

