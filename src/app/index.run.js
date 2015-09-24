(function() {
  'use strict';

  angular
    .module('angularDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
