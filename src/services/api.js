'use strict';

angular.module('eshop').service('api', function(BASE_API_PATH, $http) {

	return {
		getApiPath: function(path) {
			return BASE_API_PATH + path;
		},

		getOrderById: function(id) {
			return $http.get(this.getApiPath('orders/getOrderById/' + id) )
		}
	}
});
