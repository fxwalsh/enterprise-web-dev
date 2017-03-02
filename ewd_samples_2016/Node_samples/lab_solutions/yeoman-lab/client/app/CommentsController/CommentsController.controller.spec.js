'use strict';

describe('Controller: CommentsControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('yoTestBabelApp'));

  var CommentsControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommentsControllerCtrl = $controller('CommentsControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
