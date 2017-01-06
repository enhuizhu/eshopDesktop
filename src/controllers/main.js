"use strict";

angular.module("eshop").controller("main", function($scope) {
    var controller = function($scope, auth) {
        this.$scope = $scope;
        this.$scope.auth = auth;
        console.log(this.$scope.auth);
    }

    controller.prototype = {
       
    }

    controller.$inject = ['$scope', 'auth'];
    return controller;
}());