define(['app'], function(app) {
  app.register.controller('View1Controller', [
    '$scope',
    function($scope) {
      $scope.title = 'View 1';
    },
  ]);
});
