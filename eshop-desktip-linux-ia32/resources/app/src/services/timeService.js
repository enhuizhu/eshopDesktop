'use strict';

angular.module('eshop').service('timeService', function($filter) {

	return {
		format: function(timeStamp) {
			return $filter('date')(timeStamp, 'd MMM yyyy HH:mm:ss');
		}
	}

});