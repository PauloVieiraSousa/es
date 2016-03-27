define([], function() {
  'use strict';

  var config = function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when(
        '/login', {
          templateUrl: 'app/modules/login/views/login.html',
          controller: 'LoginCtrl as vm'
        })
      .when(
        '/home', {
          templateUrl: 'app/modules/home/views/home.html',
          controller: 'HomeCtrl as vm',
          resolve : {
            HomeData : function(){
              return {msg : "Minha mensagem"};
            }
          }
        })
      .otherwise({
        redirectTo: '/login'
      });
  };

  config.$inject = ['$routeProvider', '$locationProvider'];

  return config;
});