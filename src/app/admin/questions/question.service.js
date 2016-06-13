/**
 * Created by rtyagi on 6/11/2016.
 */
(function() {
  'use strict';

  angular
    .module('jeeSolutionComparator')
    .service('QuestionService', QuestionService);

  /** @ngInject */
  function QuestionService() {

    var questionService = {

      getAllQuestions : getAllQuestions()

    };

    return questionService;
  }
})();
