(function() {
  'use strict';

  angular
    .module('jeeSolutionComparator')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1465131532346;
    vm.showToastr = showToastr;
    vm.questionPaper = {
      physics : {
        questionGroup1 : ["Q1","Q2","Q3","Q4","Q5"],
        questionGroup2 : ["Q6","Q7","Q8","Q9","Q10","Q11","Q12","Q13"],
        questionGroup3 : ["Q14","Q15","Q16","Q17","Q18"]
      },
      chemistry : {
        questionGroup1 : ["Q19","Q20","Q21","Q22","Q23"],
        questionGroup2 : ["Q24","Q25","Q26","Q27","Q28","Q29","Q30","Q31"],
        questionGroup3 : ["Q32","Q33","Q34","Q35","Q36"]
      },
      math : {
        questionGroup1 : ["Q37","Q38","Q39","Q40","Q41"],
        questionGroup2 : ["Q42","Q43","Q44","Q45","Q46","Q47","Q48","Q49"],
        questionGroup3 : ["Q50","Q51","Q52","Q53","Q54"]
      }
    };
    vm.reset = reset;
    vm.answers={};
    vm.clearRB = clearRB;
    vm.calculateMarks = calculateMarks;


    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
    function clearRB(question)
    {
      vm.answers[question]={};
    }

    function reset() {
      vm.answers = {};
    }

    vm.marks = 0;
    function calculateMarks(){

      console.log("inside calculate marks")
      calculateMarksForSingleChoice(1,5,3,-2);
      calculateMarksForSingleChoice(14, 18, 3, 0);
      calculateMarksForMultipleChoice();
    }

    function calculateMarksForSingleChoice(start, end, positiveMarks, negativeMarks){

    }

    function calculateMarksForMultipleChoice(){

    }

    vm.answersFromIitJee = {
      "Q49": {
        "A": true,
        "C": true
      },
      "Q1": "B",
      "Q2": "D",
      "Q3": "B",
      "Q4": "A",
      "Q5": "D",
      "Q6": {
        "A": true,
        "B": true,
        "D": true
      },
      "Q7": {
        "A": true,
        "B": true,
        "C": true
      },
      "Q8": {
        "A": true,
        "C": true
      },
      "Q9": {
        "A": true,
        "D": true
      },
      "Q10": {
        "B": true,
        "D": true
      },
      "Q11": {
        "A": true,
        "D": true
      },
      "Q12": {
        "A": true,
        "B": true,
        "D": true
      },
      "Q13": {
        "A": true,
        "C": true,
        "D": true
      },
      "Q14": "8",
      "Q15": "9",
      "Q16": "6",
      "Q17": "3",
      "Q18": "8",
      "Q19": "C",
      "Q20": "C",
      "Q21": "B",
      "Q22": "B",
      "Q23": "A",
      "Q24": {
        "B": true,
        "C": true,
        "D": true
      },
      "Q25": {
        "B": true,
        "D": true
      },
      "Q26": {
        "A": true,
        "C": true,
        "D": true
      },
      "Q27": {
        "B": true,
        "C": true
      },
      "Q28": {
        "A": true,
        "D": true
      },
      "Q29": {
        "A": true,
        "B": true
      },
      "Q30": {
        "B": true
      },
      "Q31": {
        "B": true,
        "C": true
      },
      "Q32": "9",
      "Q33": "4",
      "Q34": "3",
      "Q35": "2",
      "Q36": "5",
      "Q37": "C",
      "Q38": "A",
      "Q39": "C",
      "Q40": "C",
      "Q41": "C",
      "Q42": {
        "B": true,
        "C": true,
        "D": true
      },
      "Q43": {
        "A": true,
        "C": true
      },
      "Q50": "2",
      "Q51": "5",
      "Q52": "1",
      "Q53": "7",
      "Q54": "1",
      "Q44": {
        "B": true,
        "C": true
      },
      "Q45": {
        "A": true,
        "C": true,
        "D": true
      },
      "Q46": {
        "A": true,
        "D": true
      },
      "Q47": {
        "B": true,
        "C": true
      },
      "Q48": {
        "A": true,
        "B": true,
        "C": true
      }
    }

    ;
  }
})();
