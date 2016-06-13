/**
 * Created by rtyagi on 6/11/2016.
 */
(function () {
  'use strict';

  angular
    .module('jeeSolutionComparator')
    .service('QuestionModel', QuestionModel);

  /** @ngInject */
  function QuestionModel() {

    var questions = [];

    return {

      getQuestions: function ()
      {
        return questions;
      },

      setQuestions: function(val)
      {
        questions = val;
      }

    };
  }
})();
