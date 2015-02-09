var app = angular.module('LoanCalc', []);

app.service('bankService', function($http) {
	$http({
		method: 'GET',
		url: '/api/interest_rate'
	}).then(function($scope, res) {
		return res.data
	})
})