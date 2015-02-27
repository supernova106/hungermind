/**
 * Created by Nguyen on 27/2/2015.
 */
'use strict';

angular.module('myApp.question', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/question', {
            templateUrl: 'question/question.html',
            controller: 'QuestionCtrl'
        });
    }])

    .controller('QuestionCtrl', [function() {

    }]);