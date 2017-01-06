"use strict";

angular.module("eshop").controller("logoutCtrl", function($scope) {
    var controller = function(auth, $location) {
        auth.logout();
        $location.path( "/" );
    }

    controller.$inject = ['auth', '$location'];
    return controller;
}());