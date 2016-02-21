var hive = angular.module('hive', ['ui.router', 'hive.controllers', 'hive.services', 'hive.directives', 'firebase'])

hive.config(function($stateProvider, $urlRouterProvider) {
      
  $stateProvider
  
  // setup an abstract state for the tabs directive   
      
  .state("login", {
    url: "/",
    templateUrl: "templates/login.html",
    controller: "MainCtrl",
  })
  
  .state('blank', {
    url: '/blank',
    templateUrl: 'templates/blank.html',
  })
  
  .state('thread', {
    url: '/thread',
    templateUrl: 'templates/tab-thread.html',
  })
  
  .state('add', {
    url: '/add',
    templateUrl: 'templates/add.html',
  })
  
  .state('chat', {
    url: '/chat',
    templateUrl: 'templates/chat.html',
  })

    
    $urlRouterProvider.otherwise("/");
    
});