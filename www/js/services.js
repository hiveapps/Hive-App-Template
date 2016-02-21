var hive = angular.module('hive.services', []);

//Post Service
hive.factory('postService', function($firebaseArray) {
	var fb = new Firebase("https://10minute.firebaseio.com/posts");
	var posts = $firebaseArray(fb);
	var postService= {
		all: posts,
		get: function(postID) {
			return posts.$getRecord(postID);
		}
	};
	return postService;
});

hive.factory('Message', [function() {

	var messages = [{'name':'Pippo','text':'Hello'},
					{'name':'Pluto','text':'Hello'},
					{'name':'Pippo','text':'how are you ?'},
					{'name':'Pluto','text':'fine thanks'},
					{'name':'Pippo','text':'Bye'},
					{'name':'Pluto','text':'Bye'}];

	var Message = {
		all: messages
	};

	return Message;

}]);