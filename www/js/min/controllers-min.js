var hive=angular.module("hive.controllers",[]);hive.controller("MainCtrl",function(){}),hive.controller("LoginCtrl",function(e,o,r){function t(e){switch(e.provider){case"password":return e.password.email;case"twitter":return e.twitter.displayName;case"facebook":return e.facebook.displayName}}var i=new Firebase("https://10minute.firebaseio.com/");e.register=function(e,o){i.createUser({email:e,password:o},function(e,o){e?console.log("Error creating user:",e):r.go("thread")})},e.login=function(e,o){i.authWithPassword({email:e,password:o},function(e,o){e?console.log("Login Failed!",e):r.go("thread")})};var n=!0;i.onAuth(function(e){e&&n&&i.child("users").child(e.uid).set({provider:e.provider,email:t(e)})}),e.logout=function(){i.unauth(),r.go("login")}}),hive.controller("addController",function(e,o,r,t){var i=new Firebase("https://10minute.firebaseio.com/"),n=i.child("posts");e.submitPost=function(){var o=n.push();o.set({postDescription:e.postDescription}),e.master=null,e.reset=function(){e.postDescription=angular.copy(e.master),e.form&&e.form.$setPristine()},e.reset()}});