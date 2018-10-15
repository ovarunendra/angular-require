define(['app'], function(app) {
  app.directive('appHeader', [
    function() {
      return {
        restrict: 'AE',
        template: `<ul>
        <li><a href="/view1">View 1</a></li>
        <li><a href="/view2">View 2</a></li>
      </ul>
      <hr></hr>`,
      };
    },
  ]);
});
