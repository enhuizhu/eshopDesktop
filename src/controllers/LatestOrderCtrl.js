"use strict";

angular.module("eshop").controller("LatestOrderCtrl", function() {
    var controller = function(
        $scope, 
        orders, 
        timeService, 
        configs, 
        api, 
        loaderService, 
        notificationCenter,
        printService
    ) {
        $scope.orders = orders;
        $scope.timeService = timeService;
        $scope.configs = configs;

        this.$ = $scope;
        this.api = api;
        this.loaderService = loaderService
        this.notificationCenter = notificationCenter;
        this.printService = printService;
        this.bootstrapScopeEvents();
    }

    controller.prototype = {
        bootstrapScopeEvents: function(order) {
            var that = this;
            
            this.$.udpateOrderStatu = function(order) {
                console.info('new order:', order);
                that.loaderService.setLoader();

                that.api.updateOrderStatus(order).then(function(response) {
                    var data = response.data;
                    that.loaderService.unsetLoader();
                    
                    if (!data.success) {
                        that.notificationCenter.pub('notify.error', data.message);
                    }else{
                        that.notificationCenter.pub('notify.success', 'order status has been updated!');
                    }
                }).catch(function(e) {
                    console.error('update order error:', e.data);
                    that.notificationCenter.pub('notify.error', e.data);
                    that.loaderService.unsetLoader();
                });

            }

            this.$.print = function() {
                that.printService.print('hello');
            }
        }
    }

    controller.$inject = [
        '$scope', 
        'orders', 
        'timeService', 
        'configs', 
        'api', 
        'loaderService', 
        'notificationCenter',
        'printService'
    ];
    return controller;
}());