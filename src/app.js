"use strict";

angular.module("eshop", ["ngRoute"])
	.config(function($routeProvider) {
		$routeProvider.
			when("/", {
				templateUrl: "./src/views/latest_orders.html",
				controller: "LatestOrderCtrl"
			})
			.when("/logout", {
				templateUrl: "",
				controller: "logoutCtrl"
			})
			.when("/income_report", {
				templateUrl: "./src/views/income_report.html",
				controller: "incomeReportCtrl"
			})
			.when("/profit_report", {
				templateUrl: "./src/views/profit_report.html",
				controller: "profitReportCtrl"
			})
			.when("/order_report", {
				templateUrl: "./src/views/order_report.html",
				controller: "orderReportCtrl"
			})
			.otherwise({
				redirectTo: "/"
			})

		 // $http.defaults.headers.common.token = 'ZnZ96P2lTv';
	
	}).run(function(SOCKET_IO_URL, script, orders, $http) {
		$http.defaults.headers.common.token = 'ZnZ96P2lTv';

		/**
		* load the socket io client code
		**/
		script.loadScript(SOCKET_IO_URL + "/socket.io/socket.io.js", function() {
			orders.startListening(io);
		});
	});
