var app = angular.module('LoanCalc').controller('main-ctrl', function($scope) {
	bankService.getIntRate()
	.then(function(res) {
		$scope.interest_rate = res;
	})
})
