(function() {
  'use strict';

  angular
    .module('angularDemo')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($timeout, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1443134812108;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }
  }
})();
