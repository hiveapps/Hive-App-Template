var hive = angular.module('hive.controllers', []);

// Code goes here
hive.controller('MainCtrl', function() {

});

//Totally functioning simple login
hive.controller("LoginCtrl", function($scope, $firebaseAuth, $state){
var users = new Firebase("https://10minute.firebaseio.com/");

  $scope.register = function(username, password){
    users.createUser({
      email    : username,
      password : password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        $state.go('hive.home');
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
        $state.go('hive.home');
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
      /*case 'twitter':
        return authData.twitter.displayName;
      case 'facebook':
        return authData.facebook.displayName;*/
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



//Add controller to add posts into firebase
hive.controller('addController',function($scope){
	var ref = new Firebase("https://10minute.firebaseio.com/");
  var postsRef = ref.child("posts");
  $scope.submitPost = function(){

      var newPostRef = postsRef.push();
      newPostRef.set({
        postDescription: $scope.postDescription
      });
    
    //This resets the form to master which is null
    //Still need to apply some time of form reset
    //to the "Cancel" button, needs troubleshooting.
    $scope.master= null;
    
      $scope.reset = function() {
        $scope.postDescription = angular.copy($scope.master);
        if ($scope.form) $scope.form.$setPristine();
      };
      $scope.reset();
	};
});


//Thread controller used to display all posts.
//This could be done better, may need to redo
hive.controller('ThreadCtrl',function($scope,$timeout){
  var ratesRef = new Firebase('https://10minute.firebaseio.com/posts');
  
  ratesRef.on("value", function (snapshot) {
    $timeout(function () {
      update(snapshot);
      console.log(snapshot);
    });
  });
  
  function update (snapshot) {
    $scope.rate = snapshot.val();
  }
});


//Chats Page Controller
hive.controller('ChatDetailCtrl',function($scope, $firebaseArray, $state, $timeout){
	
  var ref = new Firebase("https://10minute.firebaseio.com/");
  var messageList = $('#chat-detail');
  var messagesRef = ref.child("messages");
  $scope.submitMessage = function(){

      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        messageDescription: $scope.messageDescription
      });
    
    //This resets the form to master which is null
    //Still need to apply some time of form reset
    //to the "Cancel" button, needs troubleshooting.
    $scope.master= null;
    
      $scope.reset = function() {
        $scope.messageDescription = angular.copy($scope.master);
        if ($scope.form) $scope.form.$setPristine();
      };
      $scope.reset();
	};
  
  var ratesRef = new Firebase('https://10minute.firebaseio.com/messages');
  
  ratesRef.on("value", function (snapshot) {
    $timeout(function () {
      update(snapshot);
      console.log(snapshot);
    });
  });
  
  function update (snapshot) {
    $scope.messages = snapshot.val();
  }
  
  //SCROLL TO BOTTOM OF MESSAGE LIST
    messageList[0].scrollTop = messageList[0].scrollHeight;
});