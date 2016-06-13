(function() {
  'use strict';

  angular
    .module('jeeSolutionComparator')
    .controller('AdminController', AdminController);

  /** @ngInject */
  function AdminController($state) {
    var vm = this;

    vm.editQuestions = function(){
      return $state.href('admin.questions');
    }
}
})();
