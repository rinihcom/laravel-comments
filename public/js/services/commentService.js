// public/js/services/commentService.js
angular.module('commentService', [])

	.factory('Comment', function($http) {

		return {
			// get all the comments
			get : function() {
				return $http.get('/laravel/gl/public/api/comments');
			},

			// save a comment (pass in comment data)
			save : function(commentData) {
				return $http({
					method: 'POST',
					url: '/laravel/gl/public/api/comments',
					headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
					data: $.param(commentData)
				});
			},

			// destroy a comment
			destroy : function(id) {
				return $http.delete('/laravel/gl/public/api/comments/' + id);
			}
		}

	});
	