/**
 * Created by Nguyen on 3/3/2015.
 */
'use strict';

angular.module('myApp.answer', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/answer', {
            templateUrl: 'answer/answer.html',
            controller: 'AnswerCtrl'
        });
    }])
    .controller('AnswerCtrl', [function (){
        
    }]);
