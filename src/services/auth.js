'use strict';

angular.module('eshop').service('auth', function(api, tokenService) {
	return {
		isLogin: function() {
			var token = tokenService.getToken();
			return !!token;
		},

		login: function(user, callback) {
			var that = this;
			
			return api.login(user).then(function(result) {
				console.log('value of result is:', result);
				if (!result.data.success) {
					callback(message);
				}else{
					tokenService.setToken(result.data.token);
				}
			}).catch(function(e) {
				callback(e);
			});
		},

		// setToken: function(token) {
		// 	sessionStorage.setItem('token', token);
		// },

		// getToken: function() {
		// 	return sessionStorage.getItem('token');
		// },

		logout: function() {
			tokenService.removeToken('token');
		}
	}
});
