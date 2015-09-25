(function() {
  'use strict';

  angular
    .module('angularDemo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/components/home/homeView.html',
        controller: 'HomeController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
