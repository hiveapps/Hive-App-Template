var hive = angular.module('hive', ['ui.router', 'hive.controllers', 'hive.services', 'hive.directives', 'firebase'])

hive.config(function($stateProvider, $urlRouterProvider) {
      
  $stateProvider
      
      
  .state("login", {
    url: "/",
    templateUrl: "templates/login.html",
    controller: "MainCtrl",
  })
  
  .state('thread', {
    url: '/thread',
    templateUrl: 'templates/tab-thread.html'
  })
    
    $urlRouterProvider.otherwise("/");
    
});