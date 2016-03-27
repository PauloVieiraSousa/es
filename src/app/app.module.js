define(
    [
        'config/app.config',
        'modules/login/login.module',
        'modules/home/home.module'
    ],
    function(appConfig) {
        'use strict';

        angular.module("ES", ['ngRoute', 'ES.Login', 'ES.Home'])
            .config(appConfig);

        return {
            name: 'ES'
        };
    }
);