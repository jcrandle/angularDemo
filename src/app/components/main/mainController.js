(function() {
  'use strict';

  angular
    .module('angularDemo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    var vm = this;

    activate();

    function activate() {
        $scope.values = ['a', 'b', 'c'];
    }

  }
})();
