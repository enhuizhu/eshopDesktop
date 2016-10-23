'use strict';

angular.module('eshop').service('loaderService', function() {
	var _isLoading = false;
	
	return {
		setLoader: function() {
			_isLoading = true;
		},

		unsetLoader: function() {
			_isLoading = false;
		},

		getLoaderStatus: function() {
			return _isLoading;
		}
	}
});