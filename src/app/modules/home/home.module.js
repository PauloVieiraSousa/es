define(
	[],
	function() {
	'use strict';

	angular.module('ES.Home', ['oc.lazyLoad'])
	.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            modules: [{
                name: 'HomeModule',
                files: ['/app/modules/home/config/module.deps.js']
            }]
        });
    }]);
});