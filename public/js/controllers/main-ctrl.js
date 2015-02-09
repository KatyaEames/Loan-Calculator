var app = angular.module('LoanCalc')

app.controller('MainCtrl', function($scope, bankService) {

	bankService.getIntRate()
	.then(function(res) {
		$scope.interest_rate = res;
	})

	$scope.calculatePAyment = function() {
		var totalOwed = 
		Number($scope.principal) + 
		((Number($scope.interest_rate) / 100) * 
			Number($scope.principal * 4); 
			$scope.monthly_payment = $scope.totalOwed / 48
		)
	}
})
