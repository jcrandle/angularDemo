(function() {
  'use strict';

  angular
    .module('angularDemo')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController() {
    var vm = this;

    activate();

    function activate() {
        vm.items = ['1', '2', '3'];
    }
  }
})();
