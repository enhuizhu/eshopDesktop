'use strict';

angular.module('eshop').service('orders', function(SOCKET_IO_URL, PLACE_ORDER, api, sound) {
	return {
		// items: [{"products":[{"name":"spare ribs","price":"10.00","pics":"20110416-pupu-platter-ribs-primary-thumb-625xauto-154500.jpeg","quantity":1},{"name":"prawn cracks","price":"5.00","pics":"Prawn-crackers-cooked.jpg","quantity":1},{"name":"Egg Fried Rice","price":"5.00","pics":"egg-fried-rice.jpg","quantity":1}],"userInfo":{"username":"zhuen2000","email":"zhuen2000@163.com"},"contact":{"id":"1","tel":"+447588732089","address1":"flat 3 rainbow court","address2":"chipley street","city":"london","postcode":"se14 6ez","user_id":"1","created_at":"2016-10-21 14:47:04","updated_at":"2016-10-21 14:47:04"},"orderTime":"1477067879","delieverTime":"1477071900","read":"0","status":"1", "id":1}],
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
				sound.play('new_order');
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
		},

		getTotal: function(products) {
			return products.reduce(function(prev, curr) {
				return prev + curr.price * curr.quantity;
			}, 0);
		}
	}
});