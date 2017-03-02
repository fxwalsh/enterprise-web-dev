'use strict';

describe('Component: CommentComponent', function () {

  // load the controller's module
  beforeEach(module('yoTestBabelApp'));

  var CommentComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CommentComponent = $componentController('CommentComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
