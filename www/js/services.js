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

hive.factory('Message', ['$firebase',
	function($firebase) {
		var ref = new Firebase('https://10minute.firebaseio.com/');
		var messages = $firebase(ref.child('messages')).$asArray();
 
		var Message = {
			all: messages,
			create: function (message) {
				return messages.$add(message);
			},
			get: function (messageId) {
				return $firebase(ref.child('messages').child(messageId)).$asObject();
			},
			delete: function (message) {
				return messages.$remove(message);
			}
		};
 
		return Message;
 
	}
	]);