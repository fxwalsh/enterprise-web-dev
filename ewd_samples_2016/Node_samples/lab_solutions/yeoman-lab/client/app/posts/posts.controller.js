'use strict';
(function(){

class PostsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('yoTestBabelApp')
  .component('posts', {
    templateUrl: 'app/posts/posts.html',
    controller: PostsComponent
  });

})();
