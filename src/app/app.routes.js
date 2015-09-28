(function() {
  'use strict';

  angular
    .module('angularDemo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/components/main/mainView.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/components/home/homeView.html',
        controller: 'HomeController',
        controllerAs: 'home'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
