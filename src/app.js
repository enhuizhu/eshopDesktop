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
	});
