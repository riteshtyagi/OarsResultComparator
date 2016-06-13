(function() {
  'use strict';

  angular
    .module('jeeSolutionComparator')
    .controller('AdminController', AdminController);

  /** @ngInject */
  function AdminController($state, QuestionService) {
    var vm = this;

    initialize();

    function initialize(){

    }

    vm.editQuestions = function(){
      return $state.href('admin.questions');
    }


}
})();
