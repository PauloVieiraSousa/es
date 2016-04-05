define([], function()
{
    'use strict';

    var routes =  {
        defaultRoutePath: '/login',
        routes: {
            '/login': {
                templateUrl: 'app/modules/login/views/login.html',
                controller: 'LoginCtrl as vm',
                dependencies: [
                    'modules/login/controllers/LoginCtrl'
                ]
            },
            '/home': {
                templateUrl: 'app/modules/home/views/home.html',
                controller : 'HomeCtrl as vm',
                dependencies: [
                    'modules/home/controllers/HomeCtrl'
                ]
            }
        }
    };

    return routes;
});