'use strict';

describe('orders', function() {
	var orderService = null;
	var order1 = {
		id: 1,
		items: [1, 2, 3],
		time: 'fda',
		deliveryTime: 'fda',
		read:false
	},
	order2 = {
		id: 2,
		items: [1, 2, 3],
		time: 'fda',
		deliveryTime: 'fda',
		read:false
	};

	
	beforeEach(module('eshop'));
	
	beforeEach(inject(function(orders) {
		orderService = orders;
		orderService.emptyOrders();
	}));

	it('addOrder', function() {
		orderService.addOrder(order1);
		expect(orderService.getItems()[0]).toEqual(order1);
		orderService.addOrder(order2);
		expect(orderService.getItems()[0]).toEqual(order2);
	});

	it('markAsRead', function() {
		orderService.addOrder(order1);
		var order = orderService.getOrderById(1);

		orderService.markAsRead(order);

		expect(orderService.getOrderById(1).read).toEqual(true);
	});
});
