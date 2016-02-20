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