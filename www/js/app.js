var hive = angular.module('hive', ['ui.router', 'hive.controllers', 'hive.services', 'firebase'])

hive.config(function($stateProvider, $urlRouterProvider) {
      
  $stateProvider
      
      
  .state("home", {
    url: "/",
    templateUrl: "templates/welcomeHome.html",
    controller: "MainCtrl",
  })
  
  .state('thread', {
    url: '/thread',
    templateUrl: 'templates/tab-thread.html'
  })
    
    $urlRouterProvider.otherwise("/");
    
});