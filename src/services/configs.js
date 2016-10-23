'use strict';

angular.module('eshop').service('configs', function() {
	var _configs = {};

	return {
		setConfig: function(configs) {
			_configs = configs;
		},

		getConfig: function(key) {
			if (key) {
				return _configs[key];
			}

			return _configs;
		}
	}
});