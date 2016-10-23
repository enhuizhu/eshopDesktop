'use strict';

angular.module('eshop').service('script', function() {
	this.loadScript = function(url, callback) {
		var script = document.createElement('script');
		script.onload = function() {
			if (callback && typeof callback === 'function') {
				callback();
			}
		}
		script.src = url;

		document.head.appendChild(script);
	}
});