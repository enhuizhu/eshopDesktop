'use strict';

angular.module('eshop').service('tokenService', function() {
	return {
		setToken: function(token) {
			sessionStorage.setItem('token', token);
		},

		getToken: function() {
			return sessionStorage.getItem('token');
		},

		removeToken: function() {
			return sessionStorage.removeItem('token');
		}
	}
});