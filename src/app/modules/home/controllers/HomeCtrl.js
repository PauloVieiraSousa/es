define([], function() {
    'use strict';

    angular.module('ES.Home', [])
        .controller("HomeCtrl", function(HomeData) {
            var vm = this;
            vm.msg = HomeData.msg;
        });
});