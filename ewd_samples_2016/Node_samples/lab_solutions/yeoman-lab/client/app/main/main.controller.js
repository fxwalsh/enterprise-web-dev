'use strict';
(function(){

class MainComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('yoTestBabelApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainComponent
  });

})();
