require.config({
  baseUrl: '',

  // alias libraries paths
  paths: {
    angular: 'bower_components/angular/angular.min',
    angularRoute: 'bower_components/angular-route/angular-route.min',
    app: 'src/js/app',
    View1Controller: 'src/js/controllers/Ctrl1',
    View2Controller: 'src/js/controllers/Ctrl2',
    appHeader: 'src/js/directives/appHeader',
  },

  shim: {
    app: ['angularRoute'],
    angularRoute: ['angular'],
  },

  // kick start application
  deps: ['app', 'appHeader'],
});
