(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.Controller('AlreadyBoughtController', AlreadyBoughtController);

ToBuyController.$inject = ['$scope'];
function ToBuyController($scope) {
	$scope.message = "Hello";
};

AlreadyBoughtController.$inject = ['$scope'];
function AlreadyBoughtController($scope) {
	
};

})();