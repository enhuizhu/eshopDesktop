'use strict';

angular.module('eshop').directive('loader', function(loaderService) {
	
	return {
		restrict: 'AE',
		replace: true,
		template: '<div class="loader" ng-hide="!loader.getLoaderStatus()"><div class="spiner"></div></div>',
		link: function(scope, ele, attr) {
			scope.loader = loaderService;
		}
	};
	
});