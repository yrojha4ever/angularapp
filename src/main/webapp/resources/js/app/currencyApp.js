/**
 * Created by ojhay on 1/12/2017.
 */

angular.module("showCurrency",['ui.bootstrap','ui.grid', 'ngRoute','restangular','ui-notification'])
    .directive('currencyRate',function() {
        return {
            controller: CurrencyRateCtrl,
            controllerAs: 'vm',
            restrict: 'E',
            bindToController: {
                base: '='
            },
            templateUrl: 'Currency.html'
        };

        /* @ngInject */
        function CurrencyRateCtrl($http){
            var vm = this;
            vm.rates = {};
            $http.get('http://api.fixer.io/latest?base='+vm.base).then(function(result) {
                vm.rates = result.data.rates;
            });
        }
    });

/** ============main ========*/

angular.module("currencyRateApp",['ui.bootstrap','ui.grid', 'ngRoute','restangular','ui-notification','showCurrency'])
.controller('CurrencyController', function($scope) {
    $scope.baseCurrencies = ["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","GBP","HKD","HRK","HUF","IDR","ILS","INR","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","USD","ZAR"];
});

