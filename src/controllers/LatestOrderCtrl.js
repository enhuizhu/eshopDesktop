"use strict";

angular.module("eshop").controller("LatestOrderCtrl", function() {
		var controller = function($scope, orders, timeService) {
			this.init.apply(this, arguments);
		}

		controller.prototype = {
			init: function($scope, orders, timeService) {
				$scope.orders = orders;
				$scope.timeService = timeService;
			}
		}

		controller.$inject = ['$scope', 'orders', 'timeService'];
		return controller;
}());