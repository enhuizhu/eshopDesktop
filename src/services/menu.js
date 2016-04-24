"use strict";

angular.module("eshop").service("menu", function() {
	this.items = [
		{
			title: "Log Out",
			url: "/#logout",
			children:[
				{
					title: "admin"
				},
				{
					title: "break"
				}

			],
			icon: "glyphicon-log-out",
		},
		{
			title: "Latest Orders",
			url: "/",
			children: [],
			icon: "glyphicon-envelope"
		},
		{
			title: "Report",
			url: "",
			children: [
				{
					title: "Income Report",
					children:[
						{
							title: "icome 1",
							url: "/#icome_1"
						}
					]
				},
				{
					title: "Order Report",
					url: "/#order_report",
					children:[]
				}
			],
			icon: "glyphicon-picture"
		}
	]

	
});