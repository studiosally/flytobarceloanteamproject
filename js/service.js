angular.module('mainApp')
    .factory('amadeusservice', function($http) {

        var config = {
            headers: {
                'Accept': 'application/json;'
            }
        };

        function getflightstoBCN(city, departureDate, budget) {
            var appikey = 'sFKou9NvWJAiRC7ddjqmX4tXJGAQNYMG'
            var url = 'https://api.sandbox.amadeus.com/v1.2/flights/affiliate-search?apikey=sFKou9NvWJAiRC7ddjqmX4tXJGAQNYMG&origin=' + city + '&destination=BCN&departure_date=' + departureDate + '&max_price=' + budget + '&currency=EUR'
            console.log(url)
            return $http.get(url, config)
                .then(function(response) {
                    return response.data.results
                    console.log(response.data.results)

                })
                .then(function(results) {
                    var simplifiedFlights = results.map(function(results) {
                        return {
                            total_price: results.fare.total_price,
                            flight_number: results.outbound.flights[0].flight_number,
                            airport_departure: results.outbound.flights[0].origin.airport,
                            departs_at: results.outbound.flights[0].departs_at,
                            arrives_at: results.outbound.flights[0].arrives_at,
                            urlbuylink: results.deep_link
                        }
                    })
                    return simplifiedFlights
                })
        }

        return {
            getflightstoBCN: getflightstoBCN
        }
    })
