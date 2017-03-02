'use strict';

angular.module('yoTestBabelApp', [
  'yoTestBabelApp.auth',
  'yoTestBabelApp.admin',
  'yoTestBabelApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
