define(
	[],
	function() {
	'use strict';

	angular.module('ES.Login', ['oc.lazyLoad'])
	.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            modules: [{
                name: 'LoginModule',
                files: ['/app/modules/login/config/module.deps.js']
            }]
        });
    }]);
});