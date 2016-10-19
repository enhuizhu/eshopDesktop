'use strict';

angular.module('eshop').service('orders', function(SOCKET_IO_URL, PLACE_ORDER, api) {
	return {
		items: [],

		socket: null,

		startListening: function(io) {
			this.socket = io(SOCKET_IO_URL);
			this.socket.on(PLACE_ORDER, this.onPlaceOrder.bind(this));
		},

		onPlaceOrder: function(data) {
			console.info('get orders', data);
			var that = this;

			api.getOrderById(data).then(function(response) {
				console.info('response', response.data);
				response.read = false;
				that.addOrder(response.data);
			}).catch(function(e) {	
				console.error('error', e);
			});
		},
		
		emptyOrders: function() {
			this.items = [];
		},

		getItems: function() {
			return this.items;
		},

		addOrder: function(orderObj) {
			/**
			* should put new order at very beginning
			**/
			this.items.unshift(orderObj);
		},

		markAsRead: function(orderObj) {
			orderObj.read = true;
		},

		markAllAsRead: function() {
			var that = this;
			
			this.items.map(function(item) {
				that.markAsRead(item);
			});
		},

		getOrderById: function(id) {
			return this.items.filter(function(v) {
				return v.id == id;
			}).pop();
		}
	}
});