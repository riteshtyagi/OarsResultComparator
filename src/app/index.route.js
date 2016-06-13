(function() {
  'use strict';

  angular
    .module('jeeSolutionComparator')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
    .state('paper1',{
      url: '/:year/advance/:questionPaper?language',
      templateUrl: 'app/main/IITJeeAdvancePaper1.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
      .state('admin',{
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'adminController'
      })
      .state('admin.questions',{
        url: '/admin/questions',
        templateUrl: 'app/admin/questions/question.html',
        controller: 'QuestionController',
        controllerAs: 'questionController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
