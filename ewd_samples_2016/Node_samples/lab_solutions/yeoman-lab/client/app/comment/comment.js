'use strict';

angular.module('yoTestBabelApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/posts/:id/comments', {
         templateUrl: 'app/comment/comment.html',
        controller: 'CommentsController'
      });
  });


