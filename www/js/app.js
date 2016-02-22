var hive = angular.module('hive', ['ui.router', 'hive.controllers', 'hive.services', 'hive.directives', 'firebase'])

/* DOESNT WORK YET hive.run(['$window', '$rootScope', function ($window , $rootScope) {
  $rootScope.goBack = function(){
    $window.history.back();
  }
}]);*/

hive.config(function($stateProvider, $urlRouterProvider) {
      
  $stateProvider
  
  // setup an abstract state for the tabs directive   
  .state("login", {
        url: "/",
        views: {
            'content@': {
                templateUrl: 'templates/login.html',
                controller: "MainCtrl"
            }
        }
    })
  .state('hive', {
        abstract: true,
        views: {
            'header': {
                templateUrl: 'templates/header.html'
            },
            'footer': {
                templateUrl: 'templates/tabs.html'
            }
        }
    })
    .state('hive.home', {
        url: "/home",
        views: {
            'content@': {
                templateUrl: 'templates/blank.html'
            }
        }
    })
    .state('hive.thread', {
        url: "/thread",
        views: {
            'content@': {
                templateUrl: 'templates/thread.html'
            }
        }
    })
    .state('hive.add', {
        url: "/add",
        views: {
            'content@': {
                templateUrl: 'templates/add.html'
            }
        }
    })
    .state('chat', {
        url: "/chat",
        views: {
            'content@': {
                templateUrl: 'templates/chat.html'
            }
        }
    })

    
    $urlRouterProvider.otherwise("/");
    
});