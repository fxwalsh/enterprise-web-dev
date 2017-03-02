'use strict';

angular.module('yoTestBabelApp')
  .config(function ($routeProvider) {
     $routeProvider
      .when('/posts', {
        templateUrl: 'app/posts/posts.html',
        controller: 'PostsController'
      });
  });
