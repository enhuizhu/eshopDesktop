"use strict";

angular.module("eshop").service("menu", function() {
	this.items = [
		{
			title: "Log Out",
			url: "#logout",
			children:[],
			icon: "glyphicon-log-out",
		},
		{
			title: "Latest Orders",
			url: "#/",
			children: [],
			icon: "glyphicon-envelope"
		},
		{
			title: "Report",
			children: [
				{
					title: "Income Report",
					url: "#income_report"
				},
				{
					title: "Profit Report",
					url: "#Profit_report",
				},
				{
					title: "Order Report",
					url: "#order_report",
				}
			],
			icon: "glyphicon-picture"
		}
	]

	
});