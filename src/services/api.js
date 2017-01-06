'use strict';

angular.module('eshop').service('api', function(BASE_API_PATH, $http, tokenService) {

	return {
		getApiPath: function(path, withToken) {
			var newPath = BASE_API_PATH + path;

			if (withToken) {
				newPath += '?token=' + tokenService.getToken();
			}
			
			return newPath;
		},

		getOrderById: function(id) {
			return $http.get(this.getApiPath('orders/getOrderById/' + id, true));
		},

		getConfigs: function() {
			return $http.get(this.getApiPath('getConfigs'));
		},

		updateOrderStatus: function(order) {
			var data = {
				id: order.id,
				status: order.status
			}

			return $http.post(this.getApiPath('updateOrderStatus'), data);
		},

		login: function(userInfo) {
			return $http.post(this.getApiPath('shopuser/login'), {username: userInfo.name, password: userInfo.password});
		}
	}
});
