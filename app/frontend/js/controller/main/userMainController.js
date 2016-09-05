/**
 * Created by Nathan on 9/3/2016.
 */
angular.module('tinyUrl').controller('userMainController', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $scope.submit = function () {
            $http.post('/api/urls', {
                longUrl: $scope.longUrl
            }).success(function (data) {
                $state.go('home.user.urlInfo', {shortUrl: data.shortUrl});
            });
        }

    }]);