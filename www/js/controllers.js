var hive = angular.module('hive.controllers', []);

// Code goes here
hive.controller('MainCtrl', function() {

});

//Totally functioning simple login
hive.controller("LoginCtrl", function($scope, $firebaseAuth, $state){
var users = new Firebase("https://10minute.firebaseio.com//");

  $scope.register = function(username, password){
    users.createUser({
      email    : username,
      password : password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        $state.go('thread');
      }
    });
  }
  $scope.login = function(username, password){
    users.authWithPassword({
      email    : username,
      password : password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        $state.go('thread');
      }
    });
  }
  var isNewUser = true;
  
  users.onAuth(function(authData) {
    if (authData && isNewUser) {
      // save the user's profile into the database so we can list users,
      // use them in Security and Firebase Rules, and show profiles
      users.child("users").child(authData.uid).set({
        provider: authData.provider,
        email: getName(authData)
      });
    }
  });
  
  // find a suitable name based on the meta info given by each provider
  function getName(authData) {
    switch(authData.provider) {
      case 'password':
        return authData.password.email;
      case 'twitter':
        return authData.twitter.displayName;
      case 'facebook':
        return authData.facebook.displayName;
    }
  }
  
  //Reset password functionality
  //$scope.resetPass = function(username){
  //  users.resetPassword({
  //    email: username
  //  }, function(error) {
  //    if (error) {
  //      switch (error.code) {
  //        case "INVALID_USER":
  //          console.log("The specified user account does not exist.");
  //          break;
  //        default:
  //          console.log("Error resetting password:", error);
  //      }
  //    } else {
  //      console.log("Password reset email sent successfully!");
  //    }
  //  });
  //};
  
  //Logout Functionality
  $scope.logout = function() {
    users.unauth();
    $state.go('login');
  };
});