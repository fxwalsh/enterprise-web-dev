'use strict';

angular.module('yoTestBabelApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<main></main>'
      });
  });
