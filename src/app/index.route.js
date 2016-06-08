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
    .state('fillOars',{
      url: '/fillOars/:questionPaper?language',
      templateUrl: 'app/main/IITJeeAdvancePaper1.html',
      controller: 'MainController',
      controllerAs: 'main'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
