'use strict';

angular.module('eshop').directive('notification', function() {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			config: '='
		},
		templateUrl:'./src/views/notification.html',
		link: function(scope, ele, attr) {
			if (!scope.config) {
				scope.config = {
					type: 'success',
					message: '',
					removeCallback: function() {

					}
				}
			};

			scope.remove = function() {
				ele.on('transitionend', function() {
					console.info('transitionend');
					scope.config.removeCallback();
				});

				ele.addClass('fadeout');
			};
		}
	}	
});