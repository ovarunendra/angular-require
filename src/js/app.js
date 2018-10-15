define(function() {
  var app = angular.module('demoapp', ['ngRoute']);

  app.config([
    '$routeProvider',
    '$controllerProvider',
    '$provide',
    '$compileProvider',
    '$locationProvider',
    function(
      $routeProvider,
      $controllerProvider,
      $provide,
      $compileProvider,
      $locationProvider,
    ) {
      app.register = {
        controller: $controllerProvider.register,
        factory: $provide.factory,
        directive: $compileProvider.directive,
      };

      function resolveController(names) {
        return {
          load: [
            '$q',
            '$rootScope',
            function($q, $rootScope) {
              var defer = $q.defer();
              require(names, function() {
                defer.resolve();
                $rootScope.$apply();
              });
              return defer.promise;
            },
          ],
        };
      }

      $routeProvider
        .when('/view1', {
          templateUrl: 'src/views/view1.html',
          controller: 'View1Controller',
          resolve: resolveController(['View1Controller']),
        })
        .when('/view2', {
          templateUrl: 'src/views/view2.html',
          controller: 'View2Controller',
          resolve: resolveController(['View2Controller']),
        })
        .otherwise({ redirectTo: '/view1' });

      // use the HTML5 History API
      $locationProvider.html5Mode(true);
    },
  ]);

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['demoapp']);
  });

  return app;
});
