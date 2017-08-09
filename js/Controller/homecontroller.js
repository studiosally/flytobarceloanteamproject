angular.module('mainApp')
    .controller('HomeController', function($scope, $rootScope, $location,amadeusservice) {
        $rootScope.section = 'home'
    
        var today = moment().format('YYYY-MM-DD')
        console.log(today)
            // $scope.buget = 500
        $scope.departureDate = today
        $scope.getflights = function(city, departureDate, budget) {
            $location.path('/search/' + $scope.city)

            var city = $scope.city
            var departureDate = $scope.departureDate
            var budget = $scope.budget

            console.log(city)

            amadeusservice.getflightstoBCN($scope.city, $scope.departureDate, $scope.budget)
                .then(function(response) {
                    console.log("data arrived!")
                    $rootScope.listflights = response
                    console.log($rootScope.listflights)
                })

        }
    })
