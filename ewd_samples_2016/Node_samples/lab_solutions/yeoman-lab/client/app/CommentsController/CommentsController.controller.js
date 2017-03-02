'use strict';

angular.module('yoTestBabelApp')
  .controller('CommentsController', [
      '$scope', 
      'PostsService', 
      '$routeParams',
       function ($scope,PostsService ,$routeParams) {
    PostsService.getPost($routeParams.id)
        .success(function(post) {
             $scope.post = post;
        });

    $scope.incrementUpvotes = function(comment) {
       PostsService.upvotePostComment($scope.post._id, comment._id , 
                comment.upvotes + 1 )
          .success(function(updated_comment) {
              comment.upvotes = updated_comment.upvotes
          })
    }
    $scope.addComment = function(){
            if($scope.comment.body === '') { return; }
            var comment = {
                body: $scope.comment.body,
                author: $scope.comment.author
            }
            PostsService.addPostComment($scope.post._id, comment )
                .success(function(added_comment) {
                    $scope.post.comments.push(added_comment)
                    $scope.comment = {} ;   
                })
    }
}])
