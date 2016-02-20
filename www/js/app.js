var hive = angular.module('hive', ['ui.router', 'hive.controllers', 'hive.services', 'hive.directives', 'firebase'])

hive.config(function($stateProvider, $urlRouterProvider) {
      
  $stateProvider
  
  // setup an abstract state for the tabs directive   
      
  .state("login", {
    url: "/",
    templateUrl: "templates/login.html",
    controller: "MainCtrl",
  })
  
  .state('thread', {
    url: '/thread',
    templateUrl: 'templates/tab-thread.html',
  })
  
  .state('add', {
    url: '/add',
    templateUrl: 'templates/add.html',
  })

    
    $urlRouterProvider.otherwise("/");
    
});