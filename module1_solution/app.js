(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.message = "";
	$scope.input = "";
	$scope.color = "";

	$scope.checkItems = function() {
		$scope.parseInput();
		$scope.setMessageAndColor();
	};

	$scope.parseInput = function () {
		$scope.items = $scope.input.split(',');
		$scope.removeEmptyItems();
	}

	$scope.removeEmptyItems = function() {
		$scope.items = $scope.items.filter((item) => item.trim().length > 0);
	}

	$scope.setMessageAndColor = function() {
		switch ($scope.items.length) {
			case 0:
				$scope.message = "Please enter data first";
				$scope.color = "red";
				break;
			case 1:
			case 2:
			case 3:
				$scope.message = "Enjoy!";
				$scope.color = "green";
				break;
			default:
				$scope.message = "Too much!";
				$scope.color = "green";
				break;
		}
	}
};


})();