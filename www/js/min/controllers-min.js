var hive=angular.module("hive.controllers",[]);hive.controller("MainCtrl",function(){}),hive.controller("LoginCtrl",function(e,o,r){function i(e){switch(e.provider){case"password":return e.password.email;case"twitter":return e.twitter.displayName;case"facebook":return e.facebook.displayName}}var t=new Firebase("https://10minute.firebaseio.com//");e.register=function(e,o){t.createUser({email:e,password:o},function(e,o){e?console.log("Error creating user:",e):r.go("thread")})},e.login=function(e,o){t.authWithPassword({email:e,password:o},function(e,o){e?console.log("Login Failed!",e):r.go("thread")})};var n=!0;t.onAuth(function(e){e&&n&&t.child("users").child(e.uid).set({provider:e.provider,email:i(e)})}),e.logout=function(){t.unauth(),r.go("login")}});