angular.module('angularDemo')
    .factory('MainService', ['$http', '$q', function($http, $q) {

        function signIn(data) {
            var deferred = $q.defer();
            
            var url = 'http://httpbin.org/post';

            $http.post(url, data).success(function(data, status) {
                deferred.resolve({data: data, status: status});
            });

            return deferred.promise;
        }

        return {
            signIn: signIn
        }      
}]);

