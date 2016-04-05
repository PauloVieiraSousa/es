define([], function() {
  'use strict';

  var config = function($routeProvider) {

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

  config.$inject = ['$routeProvider'];

  return config;
});