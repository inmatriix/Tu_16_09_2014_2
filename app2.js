angular
  .module('nameApp', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'homeCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'form.html',
        controller: 'registerCtrl'
      })
  }])