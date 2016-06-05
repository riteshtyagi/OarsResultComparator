(function() {
  'use strict';

  angular
    .module('jeeSolutionComparator')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
