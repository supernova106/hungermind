/**
 * Created by Nguyen on 3/3/2015.
 */
'user strict';

angular.module('myApp.signup', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: 'SignupCtrl'
        })
    }])
    .controller('SignupCtrl', ['$scope', function ($scope) {
        $scope.formInfo = {};
        $scope.saveData = function() {
            console.log($scope.formInfo);
            $scope.nameRequired = '';
            $scope.emailRequired = '';
            $scope.passwordRequired = '';
            if (!$scope.formInfo.Name) {
                $scope.nameRequired = 'Name Required';
            }

            if (!$scope.formInfo.Email) {
                $scope.emailRequired = 'Email Required';
            }

            if (!$scope.formInfo.Password) {
                $scope.passwordRequired = 'Password Required';
            }
        };
    }]);