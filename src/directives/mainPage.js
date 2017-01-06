'use strict';

angular.module('eshop').directive('mainPage', function() {
	return {
		restrict: 'AE',
		replace: true,
		templateUrl: './src/views/mainPage.html',
		link: function(scope, ele, attr) {
			
		}
	}	
})