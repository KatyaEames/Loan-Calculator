var app = angular.module('LoanCalc')

app.controller('mainCtrl', function($scope, bankService) {
	bankService.getIntRate()
	.then(function(res) {
		$scope.interest_rate = res;
	})
})
