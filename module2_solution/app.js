(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ToBuyController($scope, ShoppingListCheckOffService) {
	var toBuy = this;

	ShoppingListCheckOffService.addItem('chocolate bars', 5);
	ShoppingListCheckOffService.addItem('bread', 1);
	ShoppingListCheckOffService.addItem('cookies', 10);
	ShoppingListCheckOffService.addItem('cheese', 1);
	ShoppingListCheckOffService.addItem('soda\'s', 2);

	toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

	toBuy.buyItem = function(index) {
		ShoppingListCheckOffService.buyItem(index);
	}
};

AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
	var bought = this;

	bought.items = ShoppingListCheckOffService.getItemsBought();
};

function ShoppingListCheckOffService() {
	var service = this;

	var itemsToBuy = [];
	var itemsBought = [];

	service.buyItem = function(index) {
		let item = itemsToBuy[index];
		itemsToBuy.splice(index, 1);
		itemsBought.push(item);
	}

	service.addItem = function(itemName, quantity) {
		itemsToBuy.push({
			name: itemName,
			quantity: quantity
		});
	}

	service.getItemsToBuy = function() {
		return itemsToBuy;
	}

	service.getItemsBought = function() {
		return itemsBought;
	}
}

})();