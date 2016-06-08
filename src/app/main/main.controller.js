(function() {
  'use strict';

  angular
    .module('jeeSolutionComparator')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $state) {
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

    vm.getIITJEE16Url = function(paper){
      return $state.href('fillOars',{questionPaper:paper,language:'en'});
    };



    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }
    vm.marks = 0;

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
      delete vm.answers[question];
    }

    function reset() {
      vm.marks = 0;
      vm.answers = {};
    }


    function calculateMarks(){
      vm.marks = 0;
      calculateMarksForSingleChoice();
    }

    vm.IITJeeAnswerModel = {};

    var questionPattern = {
      physics: {
        section1: {
          range: {
            start: 1,
            end: 5
          },
          positiveMark: 3,
          negativeMark: -1
        },
        section2: {
          range: {
            start: 6,
            end: 13
          },
          positiveMark: 4,
          negativeMark: -2
        },
        section3: {
          range: {
            start: 14,
            end: 18
          },
          positiveMark: 3,
          negativeMark: 0
        }
      },
      chemistry: {
        section1: {
          range: {
            start: 37,
            end: 41
          },
          positiveMark: 3,
          negativeMark: -1
        },
        section2: {
          range: {
            start: 42,
            end: 49
          },
          positiveMark: 4,
          negativeMark: -2
        },
        section3: {
          range: {
            start: 50,
            end: 54
          },
          positiveMark: 3,
          negativeMark: 0
        }
      },
      math: {
        section1: {
          range: {
            start: 19,
            end: 23
          },
          positiveMark: 3,
          negativeMark: -1
        },
        section2: {
          range: {
            start: 24,
            end: 31
          },
          positiveMark: 4,
          negativeMark: -2
        },
        section3: {
          range: {
            start: 32,
            end: 36
          },
          positiveMark: 3,
          negativeMark: 0
        }
      }
    };

      prepareAnswerModel(questionPattern);

    function prepareAnswerModel(questionPattern){
      for(var key in questionPattern){
        if (!questionPattern.hasOwnProperty(key)) continue;
          for (var section in questionPattern[key]) {
            if (!questionPattern[key].hasOwnProperty(section)) continue;
            prepareAnswerObject(questionPattern[key][section].range.start, questionPattern[key][section].range.end, questionPattern[key][section].positiveMark, questionPattern[key][section].negativeMark)
          }
      }
    }
    function prepareAnswerObject(questionStart, questionEnd, positiveMark, negativeMark){
      for(var i = questionStart; i <= questionEnd; i++){
        var queNumber = "Q"+i;
        var answer = {};
        answer.questionNumber = queNumber;
        answer.positiveMark = positiveMark;
        answer.negativeMark = negativeMark;
        vm.IITJeeAnswerModel[queNumber] = answer;
      }
    }

    vm.answersFromIitJee = {
      "Q1": "B",
      "Q2": "D",
      "Q3": "B",
      "Q4": "A",
      "Q5": "C",
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
      "Q45": {
        "A": true,
        "C": true,
        "D": true
      },
      "Q46": {
        "A": true,
        "C": true
      },
      "Q47": {
        "B": true,
        "C": true
      },
      "Q49": {
        "A": true,
        "C": true
      },
      "Q50": "2",
      "Q51": "3",
      "Q52": "1",
      "Q53": "7",
      "Q54": "1"
    };
    function calculateMarksForSingleChoice(){
      var total = 0;
      _.forEach(_.keys(vm.answers),function(key){
        if(vm.answersFromIitJee[key] && !_.isEmpty(vm.answers[key])){
          if(vm.questionPaper.physics.questionGroup2[key] || vm.questionPaper.chemistry.questionGroup2[key] || vm.questionPaper.math.questionGroup2[key] ){

            if(vm.answersFromIitJee[key].length < vm.answer[key].length){
              total = total + vm.IITJeeAnswerModel[key].negativeMark;
            }
            else if(vm.answersFromIitJee[key].length === vm.answer[key].length){
              _.forEach(_.keys(vm.answers),function(key) {
                if(vm.answer[key] !== vm.answersFromIitJee[key] ){
                  total = total + vm.IITJeeAnswerModel[key].negativeMark;
                  return false;

                }
              });
              total = total + vm.IITJeeAnswerModel[key].positiveMark;
            }
            else {
              var temp = 0;
              _.forEach(_.keys(vm.answers),function(key) {
                if(answer[key] !== answersFromIitJee[key] ){
                  temp = vm.IITJeeAnswerModel[key].negativeMark;
                  return false;
                }
                else {
                  temp++
                }
              });
              total = total + temp;
            }
          }
          if( _.isEqual(vm.answers[key],vm.answersFromIitJee[key])  ){
            total =total + vm.IITJeeAnswerModel[key].positiveMark;
          }
          else{
            total = total+vm.IITJeeAnswerModel[key].negativeMark;
          }
        }
        vm.marks = total;
      });
    }

}
})();
