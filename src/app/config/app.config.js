define(
  [],
  function() {
    'use strict';

    var config = function($routeProvider) {
      $routeProvider
        .when(
          '/', {
            templateUrl: 'app/modules/home/views/home.html',
            controller: 'HomeCtrl as vm',
            resolve: {
              loadDeps: [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load('HomeModule');
                }
              ],
              HomeData: function() {
                return {
                  msg: "Minha mensagem"
                };
              }
            }
          })
        .when(
          '/login', {
            templateUrl: 'app/modules/login/views/login.html',
            controller: 'LoginCtrl as vm',
            resolve: {
              loadDeps: [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load('LoginModule');
                }
              ]
            }
          })
        .otherwise({
          redirectTo: '/'
        });
    };

    config.$inject = ['$routeProvider'];

    return config;
  });