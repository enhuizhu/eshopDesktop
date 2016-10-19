"use strict";

angular.module("eshop").controller("LatestOrderCtrl", function() {
		var controller = function($scope, orders) {
			this.init.apply(this, arguments);
		}

		controller.prototype = {
			init: function($scope, orders) {
				$scope.orders = orders;
			}
		}

		controller.$inject = ['$scope', 'orders'];
		return controller;
}());