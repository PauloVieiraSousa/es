(function() {

    'use strict';

    require.config({
        baseUrl: 'app',
        urlArgs: 'v=0.1',
        waitSeconds: 0,
        paths: {
            'angular': '../assets/libs/angular/angular',
            'angular-route': '../assets/libs/angular-route/angular-route'
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular-route': {
                deps: ['angular']
            },
            'app': {
                deps: ['angular', 'angular-route']
            }
        }
    });

    require(
        ['app'],
        function(app) {
            angular.bootstrap(document, ['ES']);
        }
    );

})();