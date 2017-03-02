'use strict';

angular.module('yoTestBabelApp.auth', [
  'yoTestBabelApp.constants',
  'yoTestBabelApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
