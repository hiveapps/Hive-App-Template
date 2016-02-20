var hive = angular.module('hive', ['ui.router', 'hive.controllers', 'hive.services', 'hive.directives', 'firebase'])

hive.config(function($stateProvider, $urlRouterProvider) {
      
  $stateProvider
  
  // setup an abstract state for the tabs directive
  //  .state('tab', {
  //  url: '/tab',
  //  abstract: true,
  //  templateUrl: 'templates/tabs.html'
  //})    
      
  .state("login", {
    url: "/",
    templateUrl: "templates/login.html",
    controller: "MainCtrl",
  })
  
  //.state('tab.thread', {
  //  url: '/thread',
  //  templateUrl: 'templates/tab-thread.html',
  //})
  
  .state('thread', {
    url: '/thread',
    templateUrl: 'templates/tab-thread.html',
  })
    
    $urlRouterProvider.otherwise("/");
    
});