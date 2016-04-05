define(
    [
        'config/app.loader',
        'config/app.routes'
    ],
    function(appLoader, appRoutes) {
        'use strict';

        var app = angular.module("ES", ['ngRoute'])
            .config([
                '$routeProvider',
                '$controllerProvider',
                '$compileProvider',
                '$filterProvider',
                '$provide',
                function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

                    app.controller = $controllerProvider.register;
                    app.directive = $compileProvider.directive;
                    app.filter = $filterProvider.register;
                    app.factory = $provide.factory;
                    app.service = $provide.service;

                    if (appRoutes.routes !== undefined) {
                        angular.forEach(appRoutes.routes, function(route, path) {
                            $routeProvider.when(path, {
                                templateUrl: route.templateUrl,
                                controller: route.controller,
                                resolve: appLoader(route.dependencies)
                            });
                        });
                    }

                    if (appRoutes.defaultRoutePath !== undefined) {
                        $routeProvider.otherwise({
                            redirectTo: appRoutes.defaultRoutePath
                        });
                    }

                }
            ]);

        return app;
    }
);