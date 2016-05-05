(function() {
    'use strict';

    require.config({
        baseUrl: 'app',
        urlArgs: 'v=0.1',
        waitSeconds: 0,
        paths: {
            'angular': '../assets/js/angular/angular.min',
            'angular-route': '../assets/js/angular/angular-route.min',
            'ocLazyLoad': '../assets/js/oclazyload/ocLazyLoad.require.min',
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular-route': {
                deps: ['angular']
            },
            'app.module': {
                deps: ['angular', 'angular-route']
            }
        }
    });

    require(
        ['app.module'],
        function(app) {
            angular.bootstrap(document, [app.name], {
                strictDi: false
            });
        }
    );
})();