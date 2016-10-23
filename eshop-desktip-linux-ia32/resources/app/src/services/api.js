'use strict';

angular.module('eshop').service('api', function(BASE_API_PATH, $http) {

	return {
		getApiPath: function(path) {
			return BASE_API_PATH + path;
		},

		getOrderById: function(id) {
			return $http.get(this.getApiPath('orders/getOrderById/' + id) )
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
		}
	}
});
