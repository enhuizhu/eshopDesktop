'use strict';

angular.module('eshop').directive('login', function(auth) {
	return {
		restrict: 'AE',
		replace: true,
		templateUrl: './src/views/login.html',
		link: function(scope, ele, attr) {
			scope.hasError = false;

			scope.closeAlert = function() {
				scope.hasError = false;
			}

			scope.login = function() {
				console.log('user', scope.user);
				auth.login(scope.user, function(error) {
					if (error) {
						scope.hasError = true;
					}
				});
			}
		}
	}	
})