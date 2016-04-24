"use strict";

angular.module("eshop").directive("menu", function(menu, $compile, $sce) {
	return {
		replace: true,
		restrict: "E",
		templateUrl: "./src/views/menu.html",
		link: function(scope, element, attr) {
			scope.menu = menu;

			scope.toogle = function(item) {
				item.active = !item.active;
			}

		}
	}	
});