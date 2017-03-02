'use strict';
(function(){

class CommentComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('yoTestBabelApp')
  .component('comment', {
    templateUrl: 'app/comment/comment.html',
    controller: CommentController
  });

})();
