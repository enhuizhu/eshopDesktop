'use strict';

angular.module('eshop').directive('notifications', function(notificationCenter, $timeout) {
	return {
		restrict: 'AE',
		replace: true,
		templateUrl: './src/views/notifications.html',
		link: function(scope, ele, attr) {
			var supportTypes = ['success', 'warning', 'error'];
			
			var obj = {
				delay: 3,

				items: [],

				remove: function(item) {
					for(var i in this.items) {
						var temp = this.items[i];

						if (temp.type === item.type && temp.message == item.message) {
							obj.items.splice(i, 1);
							break;
						}
					}
				},

				scheduleRemove: function(item) {
					$timeout(function() {
						obj.remove(item);
					}, this.delay * 1000);
				},

				init: function() {
					supportTypes.map(function(v) {
						notificationCenter.sub('notify.' + v, function(message) {
							var item = {
								type: v,
								message: message,
								removeCallback: function() {
									obj.remove(item);
									scope.$digest();
								}
							};
							
							obj.items.unshift(item);
							obj.scheduleRemove(item);
						});
					});
				}
			};

			obj.init();

			scope.notifications = obj;
		}
	}
});