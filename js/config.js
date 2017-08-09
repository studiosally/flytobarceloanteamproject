angular.module('mainApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/templates/home.html',
                controller: 'HomeController'
            })
            .when('/:search/:city', {
                templateUrl: '/templates/results.html',
                controller: 'ResultsController'
            })
    })
