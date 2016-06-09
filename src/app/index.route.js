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
      .state('paper2',{
        url: '/:year/advance/:questionPaper?language',
        templateUrl:'app/main/IITJeeAdvancePaper2.html',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
